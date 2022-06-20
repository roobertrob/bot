import { NewRobot } from '../../types';
import { botService } from '../../services/api';
import { useAvailableBots } from '../../stores/useAvailableBots';

const usePostBot = () => {
  const {decreaseAvailableBots} = useAvailableBots((state) => state);

  const postBot = async (data: NewRobot) => {
    const { status } = await botService.createRobot(data);
    if (status !== 200) throw new Error();
    decreaseAvailableBots(status);
  };
  return { postBot };
};

export { usePostBot };

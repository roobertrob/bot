import { NewRobot } from '../../types';
import { botService } from '../../services/api';

const usePostBot = () => {
  const postBot = async (data: NewRobot) => {
    const { status, request } = await botService.createRobot(data);
    if (status !== 200) throw new Error();
    console.log(request.response.data);
  };
  return { postBot };
};

export { usePostBot };

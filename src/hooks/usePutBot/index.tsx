import { botService } from 'services/api';

const usePutBot = () => {
  const putBot = async (robotId: number, action: string) => {
    const { status, request } = await botService.putRobot(robotId, action);
    if (status === 200) {
      console.log(request.response.data);
    }
    throw new Error();
  };

  return { putBot };
};

export { usePutBot };

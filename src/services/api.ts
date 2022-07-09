import { Api } from 'providers';
import { Overview, ApiData, NewRobot } from 'types';

const getOverview = () => Api.get<Overview>('/robot/overview');
const getAll = () => Api.get<ApiData>('/robot');
const createRobot = (data: NewRobot) => Api.post<NewRobot>('/robot', data);
const putRobot = (robotId: number, action: string) =>
  Api.put(`/robot/${robotId}/${action}`, { robotId, action });
export const botService = {
  getOverview,
  getAll,
  createRobot,
  putRobot,
};

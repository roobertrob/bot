import { NewRobot, ApiData } from '../types';
import { Api } from '../providers';

const getAll = () => Api.get<ApiData>('/robot');
const createRobot = (data: NewRobot) => Api.post<NewRobot>('/robot', data);
const putRobot = (robotId: number, action: string) =>
  Api.put('/robot/' + robotId + '/' + action, { robotId, action });
export const botService = {
  getAll,
  createRobot,
  putRobot,
};

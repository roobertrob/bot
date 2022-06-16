import { NewRobot, ApiData } from '../types';
import { Api } from '../providers';
const getAll = () => Api.get<ApiData>('/robot');
const createRobot = (data: NewRobot) => Api.post<NewRobot>('/robot');
export const botService = {
  getAll,
  createRobot,
};

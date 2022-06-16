import { NewRobot, RootObject } from '../components/types';
import { Api } from '../providers';
const getAll = () => Api.get<RootObject>('/robot');
const createRobot = (data: NewRobot) => Api.post<NewRobot>('/robot');
export const botService = {
  getAll,
  createRobot,
};
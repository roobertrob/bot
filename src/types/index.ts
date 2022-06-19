export type PropsTypes = {
  modalOpen: boolean;
};
export interface Options {
  id: number;
  name: string;
}
export interface RadioGroupProps {
  options: Options[];
  selected: React.ComponentState;
  onChange: any;
}
interface Movimentation {
  date: string;
  value: number;
}

 interface LastPaper {
  robot_id: number;
  paper: string;
  position: number;
  type: number;
  paper_value: number;
  profit: number;
  created_at: string;
  id: number;
}

export interface BotProps {
  id: number;
  title: string;
  running: number;
  updated_at: string;
  mode: number;
  simulation: number;
  stock_codes?: string;
  strategy: string;
  initial_capital: number;
  number_trades: number;
  daily_balance: number;
  type: string;
  created_at: string;
  movimentations?: Movimentation[];
  last_paper: LastPaper;
}

export interface ApiData {
  data: BotProps[];
  message: string;
}
export interface NewRobot {
  title: string;
  mode: number;
  strategy_id: number;
  initial_capital: number;
  simulation: number;
  broker_id: number;
}

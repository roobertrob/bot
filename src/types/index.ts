interface Options {
  id: number;
  name: string;
}
interface PropsTypes {
  modalOpen: boolean;
}
interface RadioGroupProps {
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

interface BotProps {
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

interface ApiData {
  data: BotProps[];
  message: string;
}
interface NewRobot {
  title: string;
  mode: number;
  strategy_id: number;
  initial_capital: number;
  simulation: number;
  broker_id: number;
}

type NewRobotProps = {
  actionTitle: string;
  botsAvailable: number;
  onClick: () => void;
};

interface Store {
  availableBots: number;
  decreaseAvailableBots: (status: number) => void;
  getAvailableBots: () => number;
}

interface StoreBots {
  loading: boolean;
  bots: BotProps[];
  fetch: () => void;
}

interface StoreOverview {
  loadingOverview: boolean;
  overview: Overview;
  fetchOverview: () => void;
}

interface Paper {
  name: string;
  trasactions: number;
}

interface Data {
  moviment_summary: number;
  transactions: number;
  open_positions: number;
  papers: Paper[];
}

interface Overview {
  data: Data;
}

export type {
  Options,
  PropsTypes,
  RadioGroupProps,
  Movimentation,
  LastPaper,
  BotProps,
  ApiData,
  NewRobot,
  NewRobotProps,
  Store,
  StoreBots,
  Paper,
  Data,
  Overview,
  StoreOverview,
};

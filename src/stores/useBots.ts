import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { botService } from '../services/api';
import { BotProps } from '../types';
interface Store {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  bots: BotProps[];
  fetch: () => void;
}

const useBots = create(
  devtools<Store>((set) => ({
    loading: false,
    setLoading: (isLoading) =>
     { isLoading && set(() => ({ loading: !isLoading }))},
    bots: [],
    fetch: async () => {
      const { data } = await botService.getAll();
      set({ bots: data.data });
    },
  })),
);

export { useBots };

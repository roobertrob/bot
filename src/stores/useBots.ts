import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { botService } from '../services/api';
import { BotProps } from '../types';
interface Store {
  loading: boolean;
  bots: BotProps[];
  fetch: () => void;
}

const useBots = create(
  devtools<Store>((set) => ({
    loading: false,
    bots: [],
    fetch: async () => {
      set({  loading: true });
      const { data } = await botService.getAll();
      set({ bots: data.data, loading: false });
    },
  })),
);

export { useBots };

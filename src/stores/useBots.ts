import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { botService } from '../services/api';
import { StoreBots } from '../types';

const useBots = create(
  devtools<StoreBots>((set) => ({
    loading: false,
    bots: [],
    fetch: async () => {
      set({ loading: true });
      const { data } = await botService.getAll();
      set({ bots: data.data, loading: false });
    },
  })),
);

export { useBots };

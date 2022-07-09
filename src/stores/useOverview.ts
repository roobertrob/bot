import { botService } from 'services/api';
import { StoreOverview, Overview } from 'types';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useOverview = create(
  devtools<StoreOverview>((set) => ({
    loadingOverview: false,
    overview: {} as unknown as Overview,
    fetchOverview: async () => {
      set({ loadingOverview: true });
      const { data } = await botService.getOverview();
      set({ overview: data, loadingOverview: false });
    },
  })),
);
export { useOverview };

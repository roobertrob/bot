import { Store } from 'types';
import create from 'zustand';

const useAvailableBots = create<Store>((set, get) => ({
  availableBots: 80,
  decreaseAvailableBots: (status) => {
    set((state) => {
      let { availableBots } = state;
      if (status === 200 && availableBots > 1) {
        availableBots = state.availableBots - 1;
      }
      return {
        availableBots,
      };
    });
  },
  getAvailableBots: () => get().availableBots,
}));
export { useAvailableBots };

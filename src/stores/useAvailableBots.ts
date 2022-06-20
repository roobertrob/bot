import create from 'zustand';

interface Store {
  availableBots: number;
  decreaseAvailableBots: () => {};
}

const useAvailableBots = create<Store>((set) => ({
  availableBots: 30,
  decreaseAvailableBots: async () => set((state) => ({ availableBots: state.availableBots - 1 })),
}));
export { useAvailableBots };

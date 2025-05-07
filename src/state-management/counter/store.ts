import { create } from "zustand";

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  // reset: () => set(() => ({ counter: 0 })),
  reset: () => set(() => ({ max: 10 })),
}));

export default useCounterStore;

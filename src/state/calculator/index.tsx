import {
  createHook,
  createStore,
} from 'react-sweet-state';
import type { CalculatorState } from './types';

// Sweet state
const initialState: CalculatorState = {
  topAmount: 0,
  bottomAmount: 0,
};

type ActionInput = {
  setState: (
    partialState: Partial<CalculatorState>,
  ) => void;
  getState: () => CalculatorState;
};

const actions = {
  setTopAmount:
    (input: number) =>
    ({ setState }: ActionInput) => {
      setState({ topAmount: input });
    },
  setBottomAmount:
    (input: number) =>
    ({ setState }: ActionInput) => {
      setState({ bottomAmount: input });
    },
};

const CalculatorStore = createStore({
  initialState,
  actions,
});

export const useCalculatorStore = createHook(
  CalculatorStore,
);

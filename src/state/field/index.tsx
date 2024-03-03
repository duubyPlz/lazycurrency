import {
  createHook,
  createStore,
} from 'react-sweet-state';
import type { FieldState } from './types';

// Sweet state
const initialState: FieldState = {
  amount: 0,
};

type ActionInput = {
  setState: (
    partialState: Partial<FieldState>,
  ) => void;
  getState: () => FieldState;
};

const actions = {
  setAmount:
    (input: number) =>
    ({ setState }: ActionInput) => {
      setState({ amount: input });
    },
};

const FieldStore = createStore({
  initialState,
  actions,
});

export const useFieldStore =
  createHook(FieldStore);

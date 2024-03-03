import type {
  ActionInput,
  CalculatorActions,
  ConvertBottomAmountAction,
  ConvertTopAmountAction,
  SetBottomAmountAction,
  SetTopAmountAction,
} from './types';

/**
 * Should only be called by the user
 */
const setTopAmount: SetTopAmountAction =
  (input: number) =>
  ({ setState }: ActionInput) => {
    setState({ topAmount: input });
  };

/**
 * Should only be called by the user
 */
const setBottomAmountAction: SetBottomAmountAction =
  (input: number) =>
  ({ setState }: ActionInput) => {
    setState({ bottomAmount: input });
  };

/**
 * Should only be called by the converter
 */
const convertTopAmountAction: ConvertTopAmountAction =
  (
    rate: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const oppositeAmount = getState().bottomAmount;
    setState({
      topAmount: convertFn(rate, oppositeAmount),
    });
  };

/**
 * Should only be called by the converter
 */
const convertBottomAmountAction: ConvertBottomAmountAction =
  (
    rate: number,
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const oppositeAmount = getState().topAmount;
    setState({
      bottomAmount: convertFn(rate, oppositeAmount),
    });
  };

const actions: CalculatorActions = {
  setTopAmount: setTopAmount,
  setBottomAmount: setBottomAmountAction,
  convertTopAmount: convertTopAmountAction,
  convertBottomAmount: convertBottomAmountAction,
};

export default actions;

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
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState }: ActionInput) => {
    setState({
      topAmount: convertFn(rate, amount),
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
  ({ setState }: ActionInput) => {
    setState({
      bottomAmount: convertFn(rate, amount),
    });
  };

const actions: CalculatorActions = {
  setTopAmount: setTopAmount,
  setBottomAmount: setBottomAmountAction,
  convertTopAmount: convertTopAmountAction,
  convertBottomAmount: convertBottomAmountAction,
};

export default actions;

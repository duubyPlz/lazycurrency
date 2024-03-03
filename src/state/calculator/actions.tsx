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

// TODO Logic: tests
/**
 * Should only be called by the converter
 */
const convertTopAmountAction: ConvertTopAmountAction =
  (
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const rates = getState().rates;
    const bottomCurrency: string = getState().bottomCurrency;

    setState({
      topAmount: convertFn(rates[bottomCurrency] ?? 0, amount),
    });
  };

/**
 * Should only be called by the converter
 */
const convertBottomAmountAction: ConvertBottomAmountAction =
  (
    amount: number,
    convertFn: (rate: number, amount: number) => number,
  ) =>
  ({ setState, getState }: ActionInput) => {
    const rates = getState().rates;
    const bottomCurrency = getState().bottomCurrency;

    setState({
      bottomAmount: convertFn(rates[bottomCurrency] ?? 0, amount),
    });
  };

const actions: CalculatorActions = {
  setTopAmount: setTopAmount,
  setBottomAmount: setBottomAmountAction,
  convertTopAmount: convertTopAmountAction,
  convertBottomAmount: convertBottomAmountAction,
};

export default actions;

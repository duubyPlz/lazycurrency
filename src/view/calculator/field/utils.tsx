import { BoundActions } from 'react-sweet-state';
import { FIELD_TOP_ID } from '..';
import {
  CalculatorActions,
  CalculatorState,
} from '../../../state/calculator/types';

// TODO Logic: tests

type ConvertFunctionType = (rate: number, amount: number) => number;
export const times = (rate: number, amount: number) => amount * rate;
export const divide = (rate: number, amount: number) => amount / rate;

type GetCorrespondingActionsOutput = {
  targetAction: (input: number) => void;
  oppositeAction: (
    input: number,
    convertFn: ConvertFunctionType,
  ) => void;
  convertFn: ConvertFunctionType;
};

// TODO Logic: tests
export const getCorrespondingActions = (
  actions: BoundActions<CalculatorState, CalculatorActions>,
  id: string,
): GetCorrespondingActionsOutput => {
  const {
    setTopAmount,
    setBottomAmount,
    convertTopAmount,
    convertBottomAmount,
  } = actions;

  return id === FIELD_TOP_ID
    ? {
        targetAction: setTopAmount,
        oppositeAction: convertBottomAmount,
        convertFn: times,
      }
    : {
        targetAction: setBottomAmount,
        oppositeAction: convertTopAmount,
        convertFn: divide,
      };
};

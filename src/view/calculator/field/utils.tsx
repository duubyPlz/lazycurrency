import { BoundActions } from 'react-sweet-state';
import { FIELD_TOP_ID } from '..';
import {
  CalculatorActions,
  CalculatorState,
} from '../../../state/calculator/types';

// TODO Logic: tests
type GetTargetActionByIdOutput = (input: number) => void;

export const getTargetActionById = (
  actions: BoundActions<CalculatorState, CalculatorActions>,
  id: string,
): GetTargetActionByIdOutput => {
  const { setTopAmount, setBottomAmount } = actions;
  const wantedAction =
    id === FIELD_TOP_ID ? setTopAmount : setBottomAmount;
  return wantedAction;
};

type GetOppositeActionByIdOutput = (
  rate: number,
  amount: number,
  convertFn: (rate: number, amount: number) => number,
) => void;

export const getOppositeActionById = (
  actions: BoundActions<CalculatorState, CalculatorActions>,
  id: string,
): GetOppositeActionByIdOutput => {
  const { convertTopAmount, convertBottomAmount } = actions;
  const wantedAction =
    id === FIELD_TOP_ID ? convertBottomAmount : convertTopAmount;
  return wantedAction;
};

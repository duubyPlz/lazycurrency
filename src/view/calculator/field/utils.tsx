import { BoundActions } from 'react-sweet-state';
import { FIELD_TOP_ID } from '..';
import {
  CalculatorAction,
  CalculatorState,
} from '../../../state/calculator/types';

// TODO Logic: tests
export const getActionById = (
  actions: BoundActions<
    CalculatorState,
    CalculatorAction
  >,
  id: string,
): ((input: number) => void) => {
  const { setTopAmount, setBottomAmount } =
    actions;
  const currentSetAmount =
    id === FIELD_TOP_ID
      ? setTopAmount
      : setBottomAmount;
  return currentSetAmount;
};

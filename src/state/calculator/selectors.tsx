import { FIELD_TOP_ID } from '../../view/calculator';
import { CalculatorState } from './types';

export const getAmount = (
  state: CalculatorState,
  id: string,
) => {
  const { topAmount, bottomAmount } = state;

  return id === FIELD_TOP_ID
    ? topAmount
    : bottomAmount;
};

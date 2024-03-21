import { type CurrencyType } from '../../../state/calculator/types';

export type CurrencyProps = {
  active?: boolean;
  type: CurrencyType;
  onClickHandler?: (clickedCurrency: CurrencyType) => void;
};

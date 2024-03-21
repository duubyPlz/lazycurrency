import { type CurrencyType } from '../../../state/calculator/types';

export type CurrencyProps = {
  isActive?: boolean;
  isStatic?: boolean;
  type: CurrencyType;
  onClickHandler?: (clickedCurrency: CurrencyType) => void;
};

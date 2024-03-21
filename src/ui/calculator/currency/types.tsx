import { RefObject } from 'react';
import { type CurrencyType } from '../../../state/calculator/types';

export type CurrencyProps = {
  isActive?: boolean;
  isStatic?: boolean;
  type: CurrencyType;
  // activeRef: LegacyRef<HTMLSpanElement> | null;
  onClickHandler?: (
    clickedCurrency: CurrencyType,
    currentRef: RefObject<HTMLSpanElement>,
  ) => void;
};

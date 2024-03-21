import { CurrencyType } from '../../../../state/calculator/types';

export const getBottomCurrencies = (): CurrencyType[] =>
  Object.values(CurrencyType).filter(
    (currencyType) => currencyType !== CurrencyType.AUD,
  );

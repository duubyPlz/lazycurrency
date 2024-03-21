import { RefObject } from 'react';
import { useCalculatorActions } from '../../../../state/calculator/index.tsx';
import { useActiveCurrency } from '../../../../state/calculator/selectors.tsx';
import {
  // Not using this as a type, but actually as values
  CurrencyType,
} from '../../../../state/calculator/types.tsx';
import Currency from '../../currency';
import Shifter from './shifter/index.tsx';
import { Wrapper } from './styled.tsx';

import {
  getBottomCurrencies,
  calculateShiftWidth,
} from './utils.tsx';

const handleClick = (
  clickedCurrency: CurrencyType,
  // ? Type: Couldn't reconcile this type with SetActiveCurrencyAction
  setActiveCurrency: (currencyType: CurrencyType) => void,
  setShiftWidth: (width: number) => void,
  ref: RefObject<HTMLSpanElement>,
) => {
  setActiveCurrency(clickedCurrency);
  setShiftWidth(calculateShiftWidth(ref));
};

export const DynamicPicker = () => {
  const activeCurrency = useActiveCurrency()[0];
  const [, { setActiveCurrency, setShiftWidth }] =
    useCalculatorActions();

  return (
    <Wrapper>
      <Shifter>
        {getBottomCurrencies().map((currencyType) => {
          return (
            <Currency
              key={currencyType}
              type={currencyType}
              isActive={currencyType === activeCurrency}
              onClickHandler={(clickedCurrency, currentRef) =>
                handleClick(
                  clickedCurrency,
                  setActiveCurrency,
                  setShiftWidth,
                  currentRef,
                )
              }
            />
          );
        })}
      </Shifter>
    </Wrapper>
  );
};

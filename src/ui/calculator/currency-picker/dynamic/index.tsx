import { useCalculatorActions } from '../../../../state/calculator/index.tsx';
import { useActiveCurrency } from '../../../../state/calculator/selectors.tsx';
import {
  // Not using this as a type, but actually as values
  CurrencyType,
} from '../../../../state/calculator/types.tsx';
import Currency from '../../currency/index.tsx';
import Shifter from './shifter/index.tsx';

import styles from './styles.module.css';
import { getBottomCurrencies } from './utils.tsx';

const handleClick = (
  clickedCurrency: CurrencyType,
  // ! Type: Couldn't reconcile this type with SetActiveCurrencyAction
  setActiveCurrency: (currencyType: CurrencyType) => void,
) => setActiveCurrency(clickedCurrency);

export const DynamicPicker = () => {
  const activeCurrency = useActiveCurrency()[0];
  const [, { setActiveCurrency }] = useCalculatorActions();

  return (
    <div className={styles.dynamicPicker}>
      <Shifter>
        {getBottomCurrencies().map((currencyType) => {
          return (
            <Currency
              key={currencyType}
              type={currencyType}
              active={currencyType === activeCurrency}
              onClickHandler={(clickedCurrency) =>
                handleClick(clickedCurrency, setActiveCurrency)
              }
            />
          );
        })}
      </Shifter>
    </div>
  );
};

import Currency from '../../currency';
import { CurrencyType } from '../../currency/types.tsx';

export const StaticPicker = () => {
  return (
    <Currency type={CurrencyType.AUD} active>
      AUD
    </Currency>
  );
};

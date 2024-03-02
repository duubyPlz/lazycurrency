import Currency from '../../currency';
import { CurrencyType } from '../../currency/types.tsx';

// TODO flex
export const DynamicPicker = () => {
  return (
    <div>
      <Currency type={CurrencyType.TWD}>
        TWD
      </Currency>
      <Currency type={CurrencyType.MYR}>
        MYR
      </Currency>
      <Currency type={CurrencyType.HKD} active>
        HKD
      </Currency>
    </div>
  );
};

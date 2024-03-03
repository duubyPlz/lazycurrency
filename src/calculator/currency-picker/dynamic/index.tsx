import Currency from '../../currency';
import { CurrencyType } from '../../currency/types.tsx';
import styles from './styles.module.css';

// TODO Styles: mobile styles
// TODO Logic: css transform animations in `updateCurrencyDisplay`
export const DynamicPicker = () => {
  return (
    <div className={styles.dynamicPicker}>
      <Currency type={CurrencyType.TWD} active>
        TWD
      </Currency>
      <Currency type={CurrencyType.MYR}>
        MYR
      </Currency>
      <Currency type={CurrencyType.HKD}>
        HKD
      </Currency>
    </div>
  );
};

import Currency from '../../currency';
import { CurrencyType } from '../../currency/types.tsx';
import styles from './styles.module.css';

export const DynamicPicker = () => {
  return (
    <div className={styles.wrapper}>
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

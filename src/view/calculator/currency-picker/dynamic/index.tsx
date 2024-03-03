import Currency from '../../currency/index.tsx';
import { CurrencyType } from '../../currency/types.tsx';
import styles from './styles.module.css';

// TODO Logic: css transform animations in `updateCurrencyDisplay`
export const DynamicPicker = () => {
  return (
    <div className={styles.dynamicPicker}>
      <Currency type={CurrencyType.TWD} focused>
        TWD
      </Currency>
      <Currency type={CurrencyType.MYR}>MYR</Currency>
      <Currency type={CurrencyType.HKD}>HKD</Currency>
    </div>
  );
};

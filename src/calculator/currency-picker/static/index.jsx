import Currency from '../../currency';
import { CurrencyType } from '../../currency/types.tsx';
import styles from './styles.module.css';

export const StaticPicker = () => {
  return (
    <div className={styles.staticPicker}>
      <Currency type={CurrencyType.AUD} active>
        AUD
      </Currency>
    </div>
  );
};

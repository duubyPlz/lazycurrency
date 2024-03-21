import Currency from '../../currency';
import styles from './styles.module.css';
import { CurrencyType } from '../../../../state/calculator/types';

export const StaticPicker = () => {
  return (
    <div className={styles.staticPicker}>
      {/* StaticPicker hard-codes this currency to always active */}
      <Currency type={CurrencyType.AUD} active>
        AUD
      </Currency>
    </div>
  );
};

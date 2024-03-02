import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Field from './field';
import styles from './styles.module.css';

const Calculator = () => {
  return (
    <div className={styles.wrapper}>
      {/* TODO Styles: inherit flex styles */}
      <div className={styles.child}>
        <Field />
        <StaticPicker />
      </div>
      <div className={styles.child}>
        <Field />
        <DynamicPicker />
      </div>
    </div>
  );
};

export default Calculator;

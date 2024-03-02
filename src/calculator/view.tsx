import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Field from './field';
import styles from './styles.module.css';

const Calculator = () => {
  return (
    <div className={styles.wrapper}>
      {/* TODO inherit flex styles */}
      <div>
        <Field />
        <StaticPicker />
      </div>
      <div>
        <Field />
        <DynamicPicker />
      </div>
    </div>
  );
};

export default Calculator;

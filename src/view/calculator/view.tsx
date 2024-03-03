import { FIELD_BOTTOM_ID, FIELD_TOP_ID } from '.';
import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Field from './field';
import styles from './styles.module.css';

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorSection}>
        <Field id={FIELD_TOP_ID} />
        <StaticPicker />
      </div>
      <div className={styles.calculatorSection}>
        <Field id={FIELD_BOTTOM_ID} />
        <DynamicPicker />
      </div>
    </div>
  );
};

export default Calculator;

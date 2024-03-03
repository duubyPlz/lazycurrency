import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Field from './field';
import styles from './styles.module.css';
import type { CalculatorViewProps } from './types';

const Calculator = ({
  topAmount,
  setTopAmount,
  bottomAmount,
  setBottomAmount,
}: CalculatorViewProps) => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorSection}>
        <Field
          amount={topAmount}
          setAmount={setTopAmount}
        />
        <StaticPicker />
      </div>
      <div className={styles.calculatorSection}>
        <Field
          amount={bottomAmount}
          setAmount={setBottomAmount}
        />
        <DynamicPicker />
      </div>
    </div>
  );
};

export default Calculator;

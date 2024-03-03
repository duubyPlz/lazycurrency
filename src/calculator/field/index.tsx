import type { FieldProps } from './types';
import styles from './styles.module.css';
import { sanitiseAmount } from '../utils';

const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setAmount: (amount: number) => void,
) => {
  setAmount(sanitiseAmount(event.target.value));
};

const Field = ({
  amount,
  setAmount,
}: FieldProps) => (
  <input
    type='number'
    className={styles.field}
    value={amount}
    onChange={(event) =>
      handleOnChange(event, setAmount)
    }
  ></input>
);

export default Field;

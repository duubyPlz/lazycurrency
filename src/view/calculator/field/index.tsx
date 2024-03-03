import { sanitiseAmount } from '../utils';
import styles from './styles.module.css';
import { type FieldProps } from './types';
import { useCalculatorStore } from '../../../state/calculator';
import { FIELD_TOP_ID } from '..';

const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setAmount: (amount: number) => void,
) => {
  const sanitised = sanitiseAmount(
    event.target.value,
  );
  setAmount(sanitised);
};

const Field = ({ id }: FieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, actions] = useCalculatorStore();

  const { topAmount, bottomAmount } = state;
  const { setTopAmount, setBottomAmount } =
    actions;
  console.log('NOW STATE', id, state);

  const currentAmount =
    id === FIELD_TOP_ID
      ? topAmount
      : bottomAmount;
  const currentSetAmount =
    id === FIELD_TOP_ID
      ? setTopAmount
      : setBottomAmount;
  return (
    <input
      id={id}
      type='number'
      className={styles.field}
      value={currentAmount}
      onChange={(event) =>
        handleOnChange(event, currentSetAmount)
      }
    ></input>
  );
};

export default Field;

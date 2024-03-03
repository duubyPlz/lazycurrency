import {
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { sanitiseAmount } from '../utils';
import styles from './styles.module.css';
import { type FieldProps } from './types';
import { useFieldStore } from '../../../state/field';

// TODO Logic: Continue fixing form 2-way binding
const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setAmount: (amount: number) => void,
  setLocalAmount: Dispatch<
    SetStateAction<number>
  >,
) => {
  console.log(
    'INSIDE ON CHANGEEE!!!!',
    event.target.value,
  );
  const sanitised = sanitiseAmount(
    event.target.value,
  );
  console.log('SANITISED', sanitised);
  setAmount(sanitised);
  setLocalAmount(sanitised);
};

const Field = ({ id }: FieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [localAmount, setLocalAmount] =
    useState(0);
  const [state, { setAmount }] = useFieldStore();

  const { amount } = state;
  console.log('NOW STATE', id, state);

  return (
    <input
      id={id}
      type='number'
      className={styles.field}
      value={amount}
      onChange={(event) =>
        handleOnChange(
          event,
          setAmount,
          setLocalAmount,
        )
      }
    ></input>
  );
};

export default Field;

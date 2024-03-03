import { sanitiseAmount } from '../utils';
import styles from './styles.module.css';
import { type FieldProps } from './types';
import { useCalculatorStore } from '../../../state/calculator';
import { BoundActions } from 'react-sweet-state';
import {
  type CalculatorAction,
  type CalculatorState,
} from '../../../state/calculator/types';
import { getActionById } from './utils';
import { getAmount } from '../../../state/calculator/selectors';

const handleOnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  actions: BoundActions<
    CalculatorState,
    CalculatorAction
  >,
  id: string,
) => {
  const sanitised = sanitiseAmount(
    event.target.value,
  );

  getActionById(actions, id)(sanitised);
};

const Field = ({ id }: FieldProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, actions] = useCalculatorStore();

  return (
    <input
      id={id}
      type='number'
      className={styles.field}
      value={getAmount(state, id)}
      onChange={(event) =>
        handleOnChange(event, actions, id)
      }
    ></input>
  );
};

export default Field;

import { sanitiseAmount } from '../utils';
import styles from './styles.module.css';
import { type FieldProps } from './types';
import { useCalculatorStore } from '../../../state/calculator';
import { BoundActions } from 'react-sweet-state';
import {
  type CalculatorActions,
  type CalculatorState,
} from '../../../state/calculator/types';
import { getCorrespondingActions } from './utils';
import { getAmount } from '../../../state/calculator/selectors';

const handleOnUserChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  actions: BoundActions<CalculatorState, CalculatorActions>,
  id: string,
) => {
  // Get value
  const sanitisedAmount = sanitiseAmount(event.target.value);

  // Get corresponding actions & logic function
  const { targetAction, oppositeAction, convertFn } =
    getCorrespondingActions(actions, id);

  // Execute sweet state actions on both fields
  targetAction(sanitisedAmount);
  oppositeAction(sanitisedAmount, convertFn);
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
      onChange={(event) => handleOnUserChange(event, actions, id)}
    ></input>
  );
};

export default Field;

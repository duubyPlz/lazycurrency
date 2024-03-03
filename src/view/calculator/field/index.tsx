import { convertAmount, sanitiseAmount } from '../utils';
import styles from './styles.module.css';
import { type FieldProps } from './types';
import { useCalculatorStore } from '../../../state/calculator';
import { BoundActions } from 'react-sweet-state';
import {
  type CalculatorActions,
  type CalculatorState,
} from '../../../state/calculator/types';
import { getOppositeActionById, getTargetActionById } from './utils';
import { getAmount } from '../../../state/calculator/selectors';

const handleOnUserChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  actions: BoundActions<CalculatorState, CalculatorActions>,
  id: string,
) => {
  const sanitisedAmount = sanitiseAmount(event.target.value);
  const setTargetField = getTargetActionById(actions, id);
  setTargetField(sanitisedAmount);

  const convertOppositeField = getOppositeActionById(actions, id);

  // TODO [[next]] Logic: Once defaultRates is in sweet state, use it here!
  convertOppositeField(rate, sanitisedAmount, convertAmount);
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

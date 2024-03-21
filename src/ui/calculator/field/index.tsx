import { sanitiseAmount } from '../utils';
import { type FieldProps } from './types';
import { useCalculatorStore } from '../../../state/calculator';
import { BoundActions } from 'react-sweet-state';
import {
  type CalculatorActions,
  type CalculatorState,
} from '../../../state/calculator/types';
import { getCorrespondingActions } from './utils';
import { getAmount } from '../../../state/calculator/selectors';
import { FieldInput } from './styled';

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
  const [state, actions] = useCalculatorStore();

  return (
    // TODO Logic: Allow decimal places
    <FieldInput
      id={id}
      type='number'
      value={getAmount(state, id)}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleOnUserChange(event, actions, id)
      }
    />
  );
};

export default Field;

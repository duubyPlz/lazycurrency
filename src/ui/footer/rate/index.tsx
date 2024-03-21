import Status from './status';
import Number from './number';
import {
  useActiveCurrency,
  useRates,
} from '../../../state/calculator/selectors';

const Rate = () => {
  const rates = useRates()[0];
  const activeCurrency = useActiveCurrency()[0];

  const currentRate = rates[activeCurrency]?.toString() ?? '--';
  // TODO Logic: Set status to green if API
  const status = 'red';

  return (
    <div>
      rate <Number>1</Number>:<Number>{currentRate}</Number>{' '}
      <Status status={status} />
    </div>
  );
};

export default Rate;

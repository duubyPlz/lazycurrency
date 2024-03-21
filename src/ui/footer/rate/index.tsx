import Status from './status';
import Number from './number';
import {
  useActiveCurrency,
  useRates,
} from '../../../state/calculator/selectors';

// TODO Logic: Pull rate from sweet state
const Rate = () => {
  const rates = useRates()[0];
  const activeCurrency = useActiveCurrency()[0];

  const currentRate = rates[activeCurrency]?.toString() ?? '--';

  return (
    <div>
      rate <Number>1</Number>:<Number>{currentRate}</Number>{' '}
      <Status />
    </div>
  );
};

export default Rate;

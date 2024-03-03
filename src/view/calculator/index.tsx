// import { useCalculatorStore } from '../../state/calculator';
import CalculatorView from './view';

export const FIELD_TOP_ID = 'top';
export const FIELD_BOTTOM_ID = 'bottom';
// TODO Logic: Fetch stuff
// TODO Logic: PWA
// TODO Logic: Hardcoded conversion

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultRates = {
  TWD: 23.5,
  MYR: 3.15,
  HKD: 6,
};

const Calculator = () => {
  // const [state] = useCalculatorStore();

  return <CalculatorView />;
};
export default Calculator;

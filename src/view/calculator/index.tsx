// import { useCalculatorStore } from '../../state/calculator';
import CalculatorView from './view';

export const FIELD_TOP_ID = 'top';
export const FIELD_BOTTOM_ID = 'bottom';
// TODO Logic: Fetch stuff
// TODO Logic: PWA
// TODO Logic: Hardcoded conversion
// TODO Logic: Use convertTopAmount

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultRates = {
  TWD: 23.5,
  MYR: 3.15,
  HKD: 6,
};

const Calculator = () => {
  // const [state] = useCalculatorStore();

  //TODO [[next]] Logic: Put defaultRates into sweet state
  return <CalculatorView />;
};
export default Calculator;

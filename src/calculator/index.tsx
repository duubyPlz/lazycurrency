import { useState } from 'react';

import CalculatorView from './view';

// TODO Logic: Fetch stuff
// TODO Logic: Hardcoded conversion

// TODO Logic: Alternative to drilling amounts/setters,
// use sweet state
const Calculator = () => {
  const [topAmount, setTopAmount] = useState(0);
  const [bottomAmount, setBottomAmount] =
    useState(0);

  return (
    <CalculatorView
      topAmount={topAmount}
      setTopAmount={setTopAmount}
      bottomAmount={bottomAmount}
      setBottomAmount={setBottomAmount}
    />
  );
};
export default Calculator;

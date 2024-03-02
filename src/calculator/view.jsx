import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Input from './input';

const Calculator = () => {
  return (
    <>
      <Input />
      <StaticPicker />
      <Input />
      <DynamicPicker />
    </>
  );
};

export default Calculator;

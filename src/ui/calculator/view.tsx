import { FIELD_BOTTOM_ID, FIELD_TOP_ID } from '.';
import { StaticPicker } from './currency-picker';
import { DynamicPicker } from './currency-picker/dynamic';
import Field from './field';
import { CalculatorSection, Wrapper } from './styled';

const Calculator = () => {
  return (
    <Wrapper>
      <CalculatorSection>
        <Field id={FIELD_TOP_ID} />
        <StaticPicker />
      </CalculatorSection>
      <CalculatorSection>
        <Field id={FIELD_BOTTOM_ID} />
        <DynamicPicker />
      </CalculatorSection>
    </Wrapper>
  );
};

export default Calculator;

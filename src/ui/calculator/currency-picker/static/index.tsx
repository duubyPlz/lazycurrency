import Currency from '../../currency';
import { CurrencyType } from '../../../../state/calculator/types';
import { Wrapper } from './styled';

export const StaticPicker = () => {
  return (
    <Wrapper>
      {/* StaticPicker hard-codes this currency to always active */}
      <Currency type={CurrencyType.AUD} isActive isStatic />
    </Wrapper>
  );
};

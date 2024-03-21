import { ReactNode } from 'react';
import { Wrapper } from './styled';

type ShifterProps = {
  children: ReactNode;
};

// TODO [[next]] Logic: css transform animations in `updateCurrencyDisplay`
const Shifter = ({ children }: ShifterProps) => (
  <Wrapper>{children}</Wrapper>
);

export default Shifter;

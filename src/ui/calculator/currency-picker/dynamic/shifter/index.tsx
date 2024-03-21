import { ReactNode } from 'react';
import { Wrapper } from './styled';
import { useShiftWidth } from '../../../../../state/calculator/selectors';

type ShifterProps = {
  children: ReactNode;
};

const Shifter = ({ children }: ShifterProps) => {
  const elementWidth = useShiftWidth()[0];

  return <Wrapper width={elementWidth ?? 0}>{children}</Wrapper>;
};

export default Shifter;

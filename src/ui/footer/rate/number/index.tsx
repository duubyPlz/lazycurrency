import { Wrapper } from './styled';

type NumberProps = {
  children: string;
};

const Number = ({ children }: NumberProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Number;

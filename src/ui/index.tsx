import Calculator from './calculator';
import Footer from './footer';
import Header from './header';
import { Wrapper } from './styled';

const LazyCurrency = () => {
  return (
    <Wrapper>
      <Header />
      <Calculator />
      <Footer />
    </Wrapper>
  );
};

export default LazyCurrency;

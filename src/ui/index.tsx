import Calculator from './calculator';
import Footer from './footer';
import Header from './header';
import { Container } from './styled';

const LazyCurrency = () => {
  return (
    <Container>
      <Header />
      <Calculator />
      <Footer />
    </Container>
  );
};

export default LazyCurrency;

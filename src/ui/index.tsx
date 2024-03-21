import { styled } from '@compiled/react';

import Calculator from './calculator';
import Footer from './footer';
import Header from './header';
import styles from './styles.module.css';

const LazyCurrency = () => {
  return (
    <div className={styles.lazyCurrency}>
      <Header />
      <Calculator />
      <Footer />
      <Container>compiled test</Container>
    </div>
  );
};

const Container = styled.div({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
});

export default LazyCurrency;

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
    </div>
  );
};
export default LazyCurrency;

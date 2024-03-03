import styles from './styles.module.css';
import type { CurrencyProps } from './types';

const Currency = ({
  type,
  active = false,
  children,
}: CurrencyProps) => {
  const currencyStyles = active
    ? `${styles.currency} ${styles[type]}`
    : `${styles.currency} ${styles.inactive}`;

  return (
    <span className={currencyStyles}>
      {children}
    </span>
  );
};

export default Currency;

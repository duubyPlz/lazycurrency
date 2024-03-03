import { useState } from 'react';
import styles from './styles.module.css';
import type { CurrencyProps } from './types';

const Currency = ({
  type,
  focused = false,
  isTop = false,
  children,
}: CurrencyProps) => {
  // TODO [[next]] Logic: If currency is clicked on, then make active
  // Default active> should still work
  const [isActive, setIsActive] = useState(isTop);

  const currencyStyles =
    isTop || focused
      ? `${styles.currency} ${styles[type]}`
      : `${styles.currency} ${styles.inactive}`;

  return <span className={currencyStyles}>{children}</span>;
};

export default Currency;

import styles from './styles.module.css';
import type { CurrencyProps } from './types';

const Currency = ({
  type,
  active = false,
  onClickHandler = undefined,
}: CurrencyProps) => {
  const currencyStyles = active
    ? `${styles.currency} ${styles[type]}`
    : `${styles.currency} ${styles.inactive}`;

  return (
    <span
      id={type}
      className={currencyStyles}
      onClick={() => onClickHandler?.(type)}
    >
      {type}
    </span>
  );
};

export default Currency;

import styles from './styles.module.css';

// TODO enum type
type CurrencyProps = {
  type: string;
  active?: boolean;
  children: string;
};

const Currency = ({
  type,
  active = false,
  children,
}: CurrencyProps) => {
  const currencyStyles = active
    ? `${styles.wrapper} ${styles[type]}`
    : `${styles.wrapper} ${styles.inactive}`;

  return (
    <span className={currencyStyles}>
      {children}
    </span>
  );
};

export default Currency;

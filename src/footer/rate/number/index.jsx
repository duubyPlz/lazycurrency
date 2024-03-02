import styles from './number.module.css';

// eslint-disable-next-line react/prop-types
const Number = ({ children }) => {
  return <span className={styles.number}>{children}</span>;
};

export default Number;

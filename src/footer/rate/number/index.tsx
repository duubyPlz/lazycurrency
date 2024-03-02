import styles from './number.module.css';

type NumberProps = {
  children: string;
};

const Number = ({ children }: NumberProps) => {
  return (
    <span className={styles.number}>
      {children}
    </span>
  );
};

export default Number;

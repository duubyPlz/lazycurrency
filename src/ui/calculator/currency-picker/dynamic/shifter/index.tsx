import { ReactNode } from 'react';

import styles from './styles.module.css';

type ShifterProps = {
  children: ReactNode;
};

// TODO [[next]] Logic: css transform animations in `updateCurrencyDisplay`
const Shifter = ({ children }: ShifterProps) => (
  <div className={styles.shifter}>{children}</div>
);

export default Shifter;

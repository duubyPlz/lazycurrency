import DataTracker from './data-tracker';
import Rate from './rate';
import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.wrapper}>
    <Rate />
    <DataTracker />
  </div>
);

export default Footer;

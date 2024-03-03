import DataTracker from './data-tracker';
import Rate from './rate';
import styles from './styles.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <Rate />
    <DataTracker />
  </div>
);

export default Footer;

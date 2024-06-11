import Image from 'next/image';
import styles from './page2.module.css';

const PageComponent2 = () => {
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/SaveSum.png" alt="SaveSum" width={167} height={35} />
      </div>
      <p className={styles.successText}>Log In</p>
      <p className={styles.phoneText}>Enter your phone number</p>
      <p className={styles.confirmationText}>We will send you a confirmation code</p>
    </div>
};

export default PageComponent2;
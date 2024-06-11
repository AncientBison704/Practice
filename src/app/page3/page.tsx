"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../page3.module.css';

const Page3 = () => {
    const router = useRouter();

    const handleVerify = () => {
        router.push('/page1'); // Adjust the path to your page3 route
    };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/SaveSum.png" alt="SaveSum" width={167} height={35} />
      </div>
      <p className={styles.successText}>Successfully!</p>
      <p className={styles.extraText}>Enjoy shopping at SaveSum</p>
      <button className={styles.continueButton} onClick={handleVerify}>
        Continue To Checkout
      </button>
    </div>
  );
};

export default Page3;

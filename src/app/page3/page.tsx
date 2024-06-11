"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../page3.module.css';

const Page3 = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleVerify = () => {
        router.push('/page1');
    };

    return (
        <>
            {isMobile ? (
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
            ) : (
                <div className={styles.desktopWarning}>
                   Please open this website on your phone, the website is not optimized for desktop use.
                </div>
            )}
        </>
    );
};

export default Page3;

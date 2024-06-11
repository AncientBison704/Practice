"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../page2.module.css';

const Page2 = () => {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 1) { 
      const newCode = [...code];
      newCode[index] = value; 
      setCode(newCode);

      if (value && e.target.nextElementSibling && e.target.nextElementSibling.tagName === 'INPUT') {
        (e.target.nextElementSibling as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const newCode = [...code];
      if (newCode[index] === '') {
        if (e.currentTarget.previousElementSibling && e.currentTarget.previousElementSibling.tagName === 'INPUT') {
          (e.currentTarget.previousElementSibling as HTMLInputElement).focus();
        }
      } else {
        newCode[index] = '';
        setCode(newCode);
      }
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 4 && !isNaN(Number(enteredCode))) {
      router.push('/page3'); 
    } else {
      alert('Please enter a valid 4-digit code.');
    }
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/SaveSum.png" alt="SaveSum" width={167} height={35} />
          </div>
          <p className={styles.loginText}>Log In</p>
          <p className={styles.phoneText}>Enter your phone number</p>
          <p className={styles.confirmationText}>We have sent the code to +44XXXXXX</p>
          
          <div className={styles.codeInputContainer}>
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={styles.codeInput}
              />
            ))}
          </div>
          <p className={styles.resendText}>Didn't receive the code? <a href="#">Create an account</a></p>
          <button className={styles.continueButton} onClick={handleVerify}>
            Verify
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

export default Page2;

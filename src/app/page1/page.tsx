"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';
import unitedKingdom from '../../../public/uk.png';

const HomePage = () => {
  const router = useRouter();
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePhoneButtonClick = () => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const handleEmailButtonClick = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d+]/g, '');

    if (inputValue.length > 14) {
      inputValue = inputValue.slice(0, 14);
    }

    if (!inputValue.startsWith('+44')) {
      if (inputValue.startsWith('+')) {
        inputValue = '+4' + inputValue.slice(1);
      } else {
        inputValue = '+44' + inputValue;
      }
    }

    setPhoneNumber(inputValue);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputBlur = () => {
    if (phoneNumber.trim() === '+44') {
      setPhoneNumber('');
    }

    if (email.trim() === '') {
      setEmail('');
    }
  };

  const handleContinueClick = () => {
    if (phoneNumber.trim() !== '') {
      const cleanedPhoneNumber = phoneNumber.trim();

      if (cleanedPhoneNumber === '+44') {
        setError('Please enter a valid phone number');
        return;
      }

      if (cleanedPhoneNumber.length !== 14) {
        setError('Phone number must be 13 digits long including the country code');
        return;
      }

      console.log('Continue button clicked for phone number');
      setError('');
      router.push('/page2');
    }

    if (email.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];

      if (!emailRegex.test(email)) {  
        setError('Invalid email format');
        return;
      }

      const domain = email.split('@')[1];
      if (!validDomains.includes(domain)) {
        setError('Email domain must be @gmail.com, @yahoo.com, or @outlook.com');
        return;
      }

      console.log('Continue button clicked for email');
      setError('');
      router.push('/page2');
    }

    if (phoneNumber.trim() === '' && email.trim() === '') {
      setError('Please enter a phone number or email');
      return;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/SaveSum.png" alt="SaveSum" width={167} height={35} />
      </div>
      <p className={styles.loginText}>Log In</p>
      <p className={styles.phoneText}>Enter your phone number</p>
      <p className={styles.confirmationText}>We will send you a confirmation code</p>
      <div className={styles.phoneButton} onClick={handlePhoneButtonClick}>
        <div className={styles.flagImage}>
          <Image src={unitedKingdom} alt="UK Flag" width={38} height={38} />
        </div>
        <span>{phoneNumber || '+44 XXXXXXXXXXX'}</span>
      </div>
      <input
        type="tel"
        ref={phoneInputRef}
        className={styles.phoneInput}
        value={phoneNumber}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="+44 XXXXXXXXXXX"
      />
      <p className={styles.textContent}>This is the text content that is displayed on larger screens.</p>
      <p className={styles.orText}>OR</p>
      <div className={styles.emailButton} onClick={handleEmailButtonClick}>
        <span>{email || 'Enter your email'}</span>
      </div>
      <input
        type="email"
        ref={emailInputRef}
        className={styles.emailInput}
        value={email}
        onChange={handleEmailChange}
        onBlur={handleInputBlur}
        placeholder="Enter your email"
      />
      <button className={styles.continueButton} onClick={handleContinueClick}>
        Continue
      </button>
      {error && <p className={styles.errorText}>{error}</p>}
      <p className={styles.createAccountText}>
        Do not have an account? <a href="#">Create an account</a>
      </p>
    </div>
  );
};

export default HomePage;

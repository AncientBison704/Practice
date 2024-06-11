"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import unitedKingdom from '../../public/uk.png';

const HomePage = () => {
  const router = useRouter();
  router.push('/page1');

};

export default HomePage;

'use client';

import React, { useState, useEffect } from 'react';
import * as styles from './Countdown.css';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date('January 1, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timeBox}>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>Min</span>
      </div>
      <div className={styles.timeBox}>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>Sec</span>
      </div>
    </div>
  );
}

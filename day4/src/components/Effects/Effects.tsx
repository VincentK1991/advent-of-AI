'use client';

import React, { useEffect, useState } from 'react';
import * as styles from './Effects.css';

const SNOWFLAKE_COUNT = 30;

export default function Effects() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const initialSnowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      fontSize: `${Math.random() * 10 + 10}px`,
    }));
    setSnowflakes(initialSnowflakes);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className={styles.mouseFollower}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {snowflakes.map((s) => (
        <div
          key={s.id}
          className={styles.snowflake}
          style={{
            left: s.left,
            animationDuration: s.animationDuration,
            animationDelay: s.animationDelay,
            fontSize: s.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
}

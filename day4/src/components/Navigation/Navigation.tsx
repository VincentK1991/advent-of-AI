'use client';

import Link from 'next/link';
import * as styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/highlights" className={styles.link}>Highlights</Link>
      <Link href="/gallery" className={styles.link}>Gallery</Link>
      <Link href="/testimonials" className={styles.link}>Testimonials</Link>
    </nav>
  );
}

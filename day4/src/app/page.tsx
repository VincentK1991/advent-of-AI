'use client';

import * as styles from '../components/Home.css';
import Countdown from '../components/Countdown';
import { Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Snowflake size={48} color="white" />
        </motion.div>
        <h1 className={styles.title}>Xmas Vacation 2025</h1>
        <p className={styles.subtitle}>
          Celebrate the magic of the season with sparkling lights, cozy nights, and unforgettable memories.
        </p>
        <Countdown />
      </section>

      <section className={styles.section}>
        <div className={styles.card} style={{ textAlign: 'center' }}>
          <h2>Welcome to our Winter Wonderland</h2>
          <p>Explore our highlights, view the gallery, or read what others had to say about their trip using the navigation above.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#7f8c8d' }}>
        <p>© 2025 Winter Wonderland. All rights reserved.</p>
      </footer>
    </main>
  );
}

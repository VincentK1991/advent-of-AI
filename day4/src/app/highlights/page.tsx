'use client';

import * as styles from '../../components/Home.css';
import { Star, Gift, Heart } from 'lucide-react';

export default function HighlightsPage() {
  return (
    <main className={styles.section}>
      <h1 style={{ textAlign: 'center', color: '#e74c3c', marginTop: '40px' }}>Highlight of the Year</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Star color="#f1c40f" />
          <h3>Northern Lights</h3>
          <p>We witnessed the breathtaking aurora borealis dancing across the winter sky.</p>
        </div>
        <div className={styles.card}>
          <Gift color="#e74c3c" />
          <h3>Cozy Cabins</h3>
          <p>Staying in a log cabin with a crackling fireplace and endless snow outside.</p>
        </div>
        <div className={styles.card}>
          <Heart color="#2ecc71" />
          <h3>Family Time</h3>
          <p>Coming together to share stories and laughter during the most wonderful time of the year.</p>
        </div>
      </div>
    </main>
  );
}

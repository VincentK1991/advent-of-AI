'use client';

import * as styles from '../../components/Home.css';
import * as contentStyles from '../../components/Content.css';

const testimonials = [
  { text: "The most magical Christmas trip we've ever had!", author: "Sarah J." },
  { text: "Snowy mountains and warm cocoa, what else could you ask for?", author: "Mike T." },
  { text: "2025 was a year to remember, especially this vacation.", author: "The Miller Family" },
  { text: "Everything was perfectly themed. The attention to detail in the winter decor was stunning.", author: "Emily R." },
  { text: "A winter wonderland brought to life. We will definitely be back next year!", author: "David W." },
];

export default function TestimonialsPage() {
  return (
    <main className={styles.section}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>What People Say</h1>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={contentStyles.testimonialCard}>
            <p>"{t.text}"</p>
            <span className={contentStyles.author}>- {t.author}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

'use client';

import * as styles from '../../components/Home.css';
import * as contentStyles from '../../components/Content.css';

const images = [
  'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1576692139157-114a229f5982?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1513297844881-e74a91011343?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1545228113-d30908759530?auto=format&fit=crop&q=80&w=400',
];

export default function GalleryPage() {
  return (
    <main className={styles.section}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>Photo Gallery</h1>
      <div className={contentStyles.galleryGrid}>
        {images.map((src, i) => (
          <div key={i} className={contentStyles.imageWrapper}>
            <img src={src} alt={`Vacation ${i}`} className={contentStyles.image} />
          </div>
        ))}
      </div>
    </main>
  );
}

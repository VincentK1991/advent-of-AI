import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    background: '#f0f8ff', // AliceBlue (snowy feel)
    text: '#2c3e50',
    primary: '#e74c3c', // Festive Red
    secondary: '#2ecc71', // Christmas Green
    accent: '#3498db', // Winter Blue
    white: '#ffffff',
    silver: '#bdc3c7',
    gold: '#f1c40f',
  },
  font: {
    body: 'var(--font-geist-sans), sans-serif',
    heading: 'var(--font-geist-mono), monospace',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '32px',
    xlarge: '64px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
});

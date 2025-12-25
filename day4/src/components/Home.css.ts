import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../styles/vars.css';

const fadeIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(20px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const hero = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${vars.color.background} 0%, ${vars.color.accent} 100%)`,
  textAlign: 'center',
  padding: vars.spacing.large,
  position: 'relative',
  overflow: 'hidden',
});

export const title = style({
  fontSize: '4rem',
  color: vars.color.primary,
  marginBottom: vars.spacing.medium,
  animation: `${fadeIn} 1s ease-out`,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
});

export const subtitle = style({
  fontSize: '1.5rem',
  color: vars.color.text,
  maxWidth: '600px',
  animation: `${fadeIn} 1.2s ease-out`,
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '1.2rem',
    },
  },
});

export const section = style({
  padding: vars.spacing.xlarge,
  maxWidth: '1200px',
  margin: '0 auto',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.spacing.large,
  marginTop: vars.spacing.large,
});

export const card = style({
  background: vars.color.white,
  padding: vars.spacing.large,
  borderRadius: vars.borderRadius.large,
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
  },
});

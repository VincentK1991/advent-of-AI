import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

const fall = keyframes({
  '0%': { transform: 'translateY(-10vh) translateX(0)', opacity: 1 },
  '100%': { transform: 'translateY(110vh) translateX(20px)', opacity: 0.3 },
});

export const snowflake = style({
  position: 'fixed',
  top: '-5%',
  color: 'white',
  userSelect: 'none',
  zIndex: 1000,
  pointerEvents: 'none',
  animation: `${fall} linear infinite`,
});

export const mouseFollower = style({
  position: 'fixed',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.3)',
  pointerEvents: 'none',
  zIndex: 9999,
  mixBlendMode: 'screen',
  transition: 'transform 0.1s ease-out',
});

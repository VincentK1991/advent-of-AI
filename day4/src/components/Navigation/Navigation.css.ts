import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const nav = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  padding: `${vars.spacing.medium} ${vars.spacing.large}`,
  display: 'flex',
  justifyContent: 'center',
  gap: vars.spacing.large,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
});

export const link = style({
  color: vars.color.text,
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
  ':hover': {
    color: vars.color.primary,
  },
});

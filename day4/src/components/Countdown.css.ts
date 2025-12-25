import { style } from '@vanilla-extract/css';
import { vars } from '../styles/vars.css';

export const container = style({
  display: 'flex',
  gap: vars.spacing.medium,
  justifyContent: 'center',
  marginTop: vars.spacing.large,
});

export const timeBox = style({
  background: vars.color.primary,
  color: vars.color.white,
  padding: vars.spacing.medium,
  borderRadius: vars.borderRadius.medium,
  minWidth: '80px',
  textAlign: 'center',
});

export const number = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  display: 'block',
});

export const label = style({
  fontSize: '0.8rem',
  textTransform: 'uppercase',
});

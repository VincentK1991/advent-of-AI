import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  padding: vars.space.large,
  maxWidth: '600px',
  margin: '0 auto',
});

export const card = style({
  backgroundColor: vars.color.white,
  padding: vars.space.xlarge,
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  borderTop: `8px solid ${vars.color.gold}`,
  textAlign: 'center',
});

export const title = style({
  color: vars.color.secondary,
  marginBottom: vars.space.large,
});

export const text = style({
  fontSize: '1.1rem',
  lineHeight: '1.6',
  marginBottom: vars.space.xlarge,
});

export const button = style({
  padding: `${vars.space.medium} ${vars.space.large}`,
  backgroundColor: vars.color.secondary,
  color: vars.color.white,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
});

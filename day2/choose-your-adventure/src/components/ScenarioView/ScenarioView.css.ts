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
  borderTop: `8px solid ${vars.color.primary}`,
});

export const text = style({
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: vars.space.xlarge,
});

export const choiceContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.medium,
});

export const choiceButton = style({
  padding: vars.space.large,
  backgroundColor: vars.color.snow,
  border: `2px solid ${vars.color.secondary}`,
  borderRadius: '8px',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: '1rem',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: vars.color.secondary,
    color: vars.color.white,
  }
});

export const resetButton = style({
  marginTop: vars.space.xlarge,
  background: 'none',
  border: 'none',
  color: '#888',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.9rem',
});

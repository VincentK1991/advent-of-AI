import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const container = style({
  padding: vars.space.xlarge,
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'center',
});

export const title = style({
  color: vars.color.primary,
  marginBottom: vars.space.xlarge,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: vars.space.large,
});

export const card = style({
  backgroundColor: vars.color.white,
  padding: vars.space.large,
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  border: `2px solid ${vars.color.secondary}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const theme = style({
  fontStyle: 'italic',
  color: vars.color.secondary,
  fontSize: '0.9rem',
});

export const button = style({
  marginTop: 'auto',
  padding: `${vars.space.medium} ${vars.space.large}`,
  backgroundColor: vars.color.primary,
  color: vars.color.white,
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.05)',
  }
});

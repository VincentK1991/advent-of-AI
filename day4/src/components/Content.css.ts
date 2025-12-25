import { style } from '@vanilla-extract/css';
import { vars } from '../styles/vars.css';

export const galleryGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: vars.spacing.medium,
  padding: vars.spacing.large,
});

export const imageWrapper = style({
  position: 'relative',
  aspectRatio: '1/1',
  overflow: 'hidden',
  borderRadius: vars.borderRadius.medium,
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const testimonialCard = style({
  background: vars.color.white,
  padding: vars.spacing.large,
  borderRadius: vars.borderRadius.large,
  borderLeft: `5px solid ${vars.color.primary}`,
  fontStyle: 'italic',
  marginBottom: vars.spacing.medium,
});

export const author = style({
  display: 'block',
  marginTop: vars.spacing.small,
  fontWeight: 'bold',
  color: vars.color.secondary,
});

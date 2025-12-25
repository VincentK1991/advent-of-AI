import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  overflowX: 'hidden',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

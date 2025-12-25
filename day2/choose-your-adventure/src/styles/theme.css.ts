import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#c41e3a', // Christmas Red
    secondary: '#2e7d32', // Christmas Green
    background: '#f5f5f5',
    text: '#333333',
    white: '#ffffff',
    gold: '#ffd700',
    snow: '#fffafa'
  },
  space: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xlarge: '32px',
  },
  font: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  }
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  minHeight: '100vh',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

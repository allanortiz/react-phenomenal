import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  baseSpace: 8,
  breakpoints: {
    xs: 480,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  button: {
    defaultColor: '#ffffff',
    size: {
      small: 30,
      medium: 40,
      larger: 50,
    }
  },
  color: {
    primary: '#B37EAA',
    accent: '#53608C',
    text: '#333333'
  },
  divider: {
    backgroundColor: '#E0E0E0'
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  typography: {
    font: 'Roboto, sans-serif',
    // weight: ...
    size: {
      h1: 96,
      h2: 60, 
      h3: 48, 
      h4: 34, 
      h5: 24, 
      h6: 20, 
      subtitle1: 16, 
      subtitle2: 14, 
      body1: 16, 
      body2: 14,
      caption: 12,
    },
    variantMapping: { 
      h1: 'h1', 
      h2: 'h2', 
      h3: 'h3', 
      h4: 'h4', 
      h5: 'h5', 
      h6: 'h6', 
      subtitle1: 'h6', 
      subtitle2: 'h6', 
      body1: 'p', 
      body2: 'p',
      caption: 'span'
    }
  },
};

export default Theme;

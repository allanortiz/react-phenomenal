import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  baseSpace: 8,
  button: {
    defaultColor: '#eeeeee',
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
  text: {
    font: 'Roboto, sans-serif',
    size: {
      body1: 16,
      body2: 14,
    }
  },
};

export default Theme;

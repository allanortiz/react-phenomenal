import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseSpace: number;
    button: {
      defaultColor: string;
      size: {
        small: number;
        medium: number;
        larger: number;
      }
    };
    color: {
      primary: string;
      accent: string;
      text: string;
    };
    text: {
      font: string;
      size: {
        body1: number;
        body2: number;
      };
    }
  }
}
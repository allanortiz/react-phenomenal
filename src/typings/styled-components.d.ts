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
    typography: {
      font: string;
      size: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
        subtitle1: number;
        subtitle2: number;
        body1: number;
        body2: number;
        caption: number;
      },
      variantMapping: { 
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        subtitle1: string;
        subtitle2: string;
        body1: string;
        body2: string;
        caption: string;
      };
    }
  }
}
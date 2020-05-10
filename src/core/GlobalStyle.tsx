import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.font};
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  html, body {
    min-height: 100vh;
  }
`;

export default GlobalStyle;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from 'core/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'core/GlobalStyle';
import Routes from 'core/Routes';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;

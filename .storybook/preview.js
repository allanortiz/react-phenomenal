import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/core/GlobalStyle';
import CrmTheme from '../src/core/theme';

addDecorator(storyFn => (
  <ThemeProvider theme={CrmTheme}>
    <GlobalStyle />

    {storyFn()}
  </ThemeProvider>
));

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './styles/global.styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

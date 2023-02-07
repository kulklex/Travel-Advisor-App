import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles';

import { createTheme } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme()
root.render(<ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</ThemeProvider>);

reportWebVitals();

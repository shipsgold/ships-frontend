import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { CssBaseline } from './styles';
import { lightTheme } from './theme';
import GlobalStyle from './styles/global';

test('renders learn react link', () => {
  const WrappedApp = () => (<ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </ThemeProvider>)
  render(<WrappedApp />);
  const titleElement = screen.getByText(/^SHIPS$/)
  expect(titleElement).toBeInTheDocument();
});

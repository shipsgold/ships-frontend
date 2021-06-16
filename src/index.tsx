import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import App from './App';
import reportWebVitals from './reportWebVitals';
import { lightTheme } from './theme'
import { CssBaseline } from "./styles"
import GlobalStyle from './styles/global';

/*
TODO rm and toggle on config for developmen
inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});
*/


ReactDOM.render(
  //  <React.StrictMode>
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

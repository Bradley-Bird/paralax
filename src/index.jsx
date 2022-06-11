import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  
  padding: 0;
  margin: 0;
}
html{
  font-size: 62.5;
}
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Barlow', sans-serif;
  color: white;
}`;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

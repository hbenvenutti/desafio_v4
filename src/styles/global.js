import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: rgb(223,46,48);
    -webkit-font-smoothing: antialiased !important;
  }

  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Questrial', sans-serif;;
  }

  button {
    cursor: pointer;
  }
`;

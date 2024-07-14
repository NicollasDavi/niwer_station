import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    overflow: hidden; /* Remove a rolagem vertical */
  }

  body {
    font: 14px 'Open Sans', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;

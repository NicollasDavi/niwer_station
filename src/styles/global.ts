import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

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
    font: 14px 'Roboto', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }

  /* Estilos personalizados para a barra de rolagem */
  .custom-scrollbar {
    position: relative;
    overflow: hidden;
    height: 100%;
  }

  .custom-scrollbar-content {
    overflow-y: scroll;
    height: 100%;
    scrollbar-width: none; /* Firefox */
  }

  .custom-scrollbar-content::-webkit-scrollbar {
    width: 0; /* Chrome, Safari, Opera */
  }

  .custom-scrollbar-track {
    position: absolute;
    top: 0;
    right: 2px;
    bottom: 2px;
    width: 8px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  .custom-scrollbar-thumb {
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .custom-scrollbar-track:hover .custom-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.7);
  }
`;

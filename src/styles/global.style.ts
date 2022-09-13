import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato', 'Courier New', Courier, monospace
  }
`;

export default GlobalStyle;

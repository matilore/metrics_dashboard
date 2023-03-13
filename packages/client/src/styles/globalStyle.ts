import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  body {
    height: 100vh;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    color: #000000;

    > #root {
          height: 100vh;
    }
  }
`;

export default GlobalStyle;

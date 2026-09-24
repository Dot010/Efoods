import { createGlobalStyle } from "styled-components";

export const cores = {
  salmao: "#E66767",
  branco: "#FFFFFF",
  fundo: "#FFEBD9"
};

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
    body {
    background-color: ${cores.branco};
    color: ${cores.salmao};
  }

  a {
    color: inherit;
  }
`
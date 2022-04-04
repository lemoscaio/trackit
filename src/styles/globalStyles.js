import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Playball&display=swap');

html {
  font-family: 'Lexend Deca', sans-serif;
}

* {
  box-sizing: border-box;
}

button {
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
`;

export default GlobalStyle;

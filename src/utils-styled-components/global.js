import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* CSS reset start */

html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, small, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* CSS reset end */

body {
  font-family: 'Lato', sans-serif;
  color: ${props => props.theme.colors.text.darkGrey}
}

button {
  font-family: 'Lato', sans-serif;
  color: white;
  font-size: 16px;
}

`;

export default GlobalStyle;

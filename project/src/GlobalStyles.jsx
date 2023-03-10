import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  p {
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  a:visited{
    color:#fff
  }
`;

export default GlobalStyle;

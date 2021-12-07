import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

*{
  box-sizing: border-box;
  padding:0;
  margin:0;
}

body {
  font-family:'Open Sans', sans-serif;
}

a{
  text-decoration: none;
  color:black;
}
`;

export default GlobalStyles;

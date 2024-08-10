//GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import GilroyExtraBold from './assets/font/Gilroy-ExtraBold.otf';
import GilroyLight from './assets/font/Gilroy-Light.otf';

const GlobalStyles = createGlobalStyle`
:root {
  --white: #F9F9F9;
  --blue: #4F92F7;
  --green: #30B94D;
  --lightgray: #686868;
  --gray30: #E3E3E34D; //rgba(227, 227, 227, 0.3)
  --darkgray: #262626;
  --lightblack: #1F1F1F;
  --black: #141414;
}

#root {
  padding: 0;
}

@font-face {
  font-family: 'Gilroy';
  src: url(${GilroyLight}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Gilroy';
  src: url(${GilroyExtraBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'Gilroy', sans-serif;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  // display: block;
  // max-width: 100%;
  // height: auto;
}

button {
  // border: none;
  // font: inherit;
  // color: inherit;
  // background-color: transparent;
  // cursor: pointer;
  // padding: 0;
}

textarea {
  font-family: 'Gilroy', sans-serif;
}

textarea::placeholder {
  font-family: 'Gilroy', sans-serif;
}

input {
  font-family: 'Gilroy', sans-serif;
}

input::placeholder {
  font-family: 'Gilroy', sans-serif;
}

.emoji-thumbs-up::before {
  content: '👍';
}

.emoji-books::before {
  content: '📚';
}
`;

export default GlobalStyles;

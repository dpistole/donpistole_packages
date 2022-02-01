import { createGlobalStyle } from 'styled-components';

import FredokaOneFont from './Fredoka_One/FredokaOne-Regular.ttf';

import OpenSansFont from './Open_Sans/OpenSans-Regular.ttf';
import OpenSansBoldFont from './Open_Sans/OpenSans-Bold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Fredoka One";
    src: url("${FredokaOneFont}") format("truetype")
  }

  @font-face {
    font-family: "Open Sans";
    src: url("${OpenSansFont}") format("truetype")
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 700;
    src: url("${OpenSansBoldFont}") format("truetype")
  }

  body {
    background-color: green;
    min-height: 100vh;
  }
`;

export default FontStyles;

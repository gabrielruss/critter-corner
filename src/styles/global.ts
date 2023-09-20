import { createGlobalStyle } from "styled-components"
import { RemSizes, colors, fonts } from "."

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${RemSizes.large};
    font-weight: 400;
    color: ${colors.black};
    background-color: ${colors.white};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.default};
  }
`

export default GlobalStyle

import styled from "styled-components"
import { colors, fonts } from "../../../../styles"
import { HeadingProps, HeadingSizes } from "../types"

export const StyledHeading = styled("h1").withConfig({
  shouldForwardProp: (prop) =>
    !["size", "color", "font", "margin"].includes(prop),
})<HeadingProps>`
  font-size: ${(props) => props.size && HeadingSizes[props.size]};
  font-weight: bold;
  color: ${(props) => props.color && colors[props.color]};
  font-family: ${(props) => props.font && fonts[props.font]};
  margin: ${(props) =>
    props.margin === "revert" ? props.margin : `${props.margin}px`};
`

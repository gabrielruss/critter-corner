import styled from "styled-components"
import { FlexProps } from "../types"

export const StyledFlex = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["direction", "align", "justify", "gap"].includes(prop),
})<FlexProps>`
  display: flex;

  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap}px;
`

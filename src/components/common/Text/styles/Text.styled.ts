import styled from "styled-components"
import { colors } from "../../../../styles"
import { TextProps, TextSize, TextWeight } from "../types"

export const StyledText = styled("p").withConfig({
  shouldForwardProp: (prop) => !["size", "weight", "color"].includes(prop),
})<TextProps>`
  font-size: ${(props) => props.size && TextSize[props.size]};
  font-weight: ${(props) => props.weight && TextWeight[props.weight]};
  color: ${(props) => props.color && colors[props.color]};

  margin: 0;
  padding: 0;
`

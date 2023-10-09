import styled from "styled-components"
import { borderRadius } from "../../../../styles"
import { ImageProps } from "../types"

export const StyledImage = styled("img").withConfig({
  shouldForwardProp: (prop) => !["borderRadius"].includes(prop),
})<ImageProps>`
  width: 100%;
  object-fit: cover;

  border-radius: ${(props) =>
    props.borderRadius && borderRadius[props.borderRadius]};
`

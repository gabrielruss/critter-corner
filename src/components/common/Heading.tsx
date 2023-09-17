import React, { PropsWithChildren } from "react"
import styled from "styled-components"
import { colors, fonts } from "../../styles"

enum HeadingSizes {
  small = "1.5rem",
  default = "2rem",
  medium = "2.5rem",
  large = "3.5rem",
  xlarge = "4.5rem",
}

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: keyof typeof HeadingSizes
  color?: keyof typeof colors
  font?: keyof typeof fonts
}

export const StyledHeading = styled("h1").withConfig({
  shouldForwardProp: (prop) => !["size", "color", "font"].includes(prop),
})<HeadingProps>`
  font-size: ${(props) => props.size && HeadingSizes[props.size]};
  font-weight: bold;
  color: ${(props) => props.color && colors[props.color]};
  font-family: ${(props) => props.font && fonts[props.font]};
`

function Heading({
  as = "h1",
  children,
  size = "default",
  color = "black",
  font = "default",
}: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading as={as} size={size} color={color} font={font}>
      {children}
    </StyledHeading>
  )
}

export default Heading

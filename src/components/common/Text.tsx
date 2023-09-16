import React from "react"
import styled from "styled-components"
import { RemSizes, colors } from "../../styles"

enum TextSize {
  small = RemSizes.large,
  medium = RemSizes.xlarge,
  large = RemSizes.xxlarge,
}

enum TextWeight {
  light = "300",
  regular = "400",
  bold = "700",
}

type TextProps = {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: keyof typeof colors
}

export const StyledText = styled.p<TextProps>`
  font-size: ${(props) => props.size && TextSize[props.size]};
  font-weight: ${(props) => props.weight && TextWeight[props.weight]};
  color: ${(props) => props.color && colors[props.color]};

  margin: 0;
  padding: 0;
`

function Text({
  children,
  size = "medium",
  weight = "regular",
  color = "black",
}: React.PropsWithChildren<TextProps>) {
  return (
    <StyledText size={size} weight={weight} color={color}>
      {children}
    </StyledText>
  )
}

export default Text

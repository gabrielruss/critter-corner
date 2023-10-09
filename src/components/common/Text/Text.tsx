import React from "react"
import { TextProps } from "./types"
import { StyledText } from "./styles/Text.styled"

function Text({
  children,
  size = "medium",
  weight = "regular",
  color = "black",
  className,
}: React.PropsWithChildren<TextProps>) {
  return (
    <StyledText size={size} weight={weight} color={color} className={className}>
      {children}
    </StyledText>
  )
}

export default Text

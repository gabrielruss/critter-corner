import React, { PropsWithChildren } from "react"
import { StyledHeading } from "./styles/Heading.styled"
import { HeadingProps } from "./types"

function Heading({
  as = "h1",
  children,
  size = "default",
  color = "black",
  font = "default",
  className,
  margin = "revert",
}: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading
      as={as}
      size={size}
      color={color}
      font={font}
      margin={margin}
      className={className}
    >
      {children}
    </StyledHeading>
  )
}

export default Heading

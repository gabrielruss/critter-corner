import React from "react"
import { StyledFlex } from "./styles/Flex.styled"
import { FlexProps } from "./types"

function Flex({
  children,
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  gap = 0,
  className,
}: React.PropsWithChildren<FlexProps>) {
  return (
    <StyledFlex
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      className={className}
    >
      {children}
    </StyledFlex>
  )
}

export default Flex

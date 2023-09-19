import React from "react"
import styled from "styled-components"
import { WrappableComponent } from "../../types"

type FlexProps = WrappableComponent & {
  direction?: "row" | "column"
  align?: "stretch" | "center" | "flex-start" | "flex-end"
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"

  gap?: number
}

const StyledFlex = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["direction", "align", "justify", "gap"].includes(prop),
})<FlexProps>`
  display: flex;

  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap}px;
`

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

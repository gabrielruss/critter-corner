import React from "react"
import styled from "styled-components"

type FlexProps = {
  direction?: "row" | "column"
  align?: "stretch" | "center" | "flex-start" | "flex-end"
  justify?: "center" | "flex-start" | "flex-end"
}

const StyledFlex = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["direction", "align", "justify"].includes(prop),
})<FlexProps>`
  display: flex;

  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`

function Flex({
  children,
  direction = "row",
  align = "stretch",
  justify = "flex-start",
}: React.PropsWithChildren<FlexProps>) {
  return (
    <StyledFlex direction={direction} align={align} justify={justify}>
      {children}
    </StyledFlex>
  )
}

export default Flex

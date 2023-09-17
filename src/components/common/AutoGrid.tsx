import React from "react"
import styled from "styled-components"

type AutoGridProps = {
  minWidth?: number
  gap?: number
  justifyItems?:
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly"
}

const StyledAutoGrid = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    !["minWidth", "gap", "justifyItems"].includes(prop),
})<AutoGridProps>`
  display: grid;
  width: inherit;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minWidth}px, 1fr)
  );
  grid-gap: ${(props) => props.gap}px;
  justify-items: ${(props) => props.justifyItems};
`

function AutoGrid({
  children,
  minWidth = 200,
  gap = 10,
  justifyItems = "stretch",
}: React.PropsWithChildren<AutoGridProps>) {
  return (
    <StyledAutoGrid minWidth={minWidth} gap={gap} justifyItems={justifyItems}>
      {children}
    </StyledAutoGrid>
  )
}

export default AutoGrid

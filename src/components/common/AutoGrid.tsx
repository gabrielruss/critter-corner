import React from "react"
import styled from "styled-components"
import { WrappableComponent } from "../../types"

type AutoGridProps = WrappableComponent & {
  minWidth?: number
  maxWidth?: number | string
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
    !["minWidth", "gap", "justifyItems", "maxWidth"].includes(prop),
})<AutoGridProps>`
  display: grid;
  width: inherit;

  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.minWidth}px, ${(props) => props.maxWidth})
  );
  grid-gap: ${(props) => props.gap}px;
  justify-items: ${(props) => props.justifyItems};
`

function AutoGrid({
  children,
  minWidth = 200,
  maxWidth = 500,
  gap = 10,
  justifyItems = "stretch",

  className,
}: React.PropsWithChildren<AutoGridProps>) {
  if (typeof maxWidth === "number") {
    maxWidth = `${maxWidth}px`
  }

  return (
    <StyledAutoGrid
      minWidth={minWidth}
      maxWidth={maxWidth}
      gap={gap}
      justifyItems={justifyItems}
      className={className}
    >
      {children}
    </StyledAutoGrid>
  )
}

export default AutoGrid

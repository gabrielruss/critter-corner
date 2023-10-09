import React from "react"
import { AutoGridProps } from "./types"
import { StyledAutoGrid } from "./styles/StyledAutoGrid.styled"

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

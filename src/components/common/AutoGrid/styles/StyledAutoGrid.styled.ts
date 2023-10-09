import styled from "styled-components"
import { AutoGridProps } from "../types"

export const StyledAutoGrid = styled("div").withConfig({
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

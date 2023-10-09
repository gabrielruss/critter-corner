import styled from "styled-components"
import {
  RemSizes,
  borderRadius,
  boxShadow,
  hoverStyles,
} from "../../../../styles"
import { StyledText } from "../../Text/styles/Text.styled"

export const CardContainer = styled.div`
  box-shadow: ${boxShadow.normal};
  border-radius: ${borderRadius.medium};
  padding: ${RemSizes.large};

  ${hoverStyles}

  > * {
    user-select: none;
  }

  ${StyledText} {
    /* ellipses text when it hits max height of container */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

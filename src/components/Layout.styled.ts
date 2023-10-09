import styled from "styled-components"
import { RemSizes, colors } from "../styles"
import { StyledHeading } from "./common/Heading/styles/Heading.styled"
import { Heading } from "./common"

export const InnerBox = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: 50vh;
  padding: ${RemSizes.xxlarge};

  border-top: 1px solid ${colors.black};
  border-left: 1px solid ${colors.black};
`

export const Container = styled.div`
  width: 100%;
  max-width: 1332px;
  margin: 0 auto;

  ${StyledHeading} {
    user-select: none;
  }
`

export const TopBox = styled.div`
  ${StyledHeading} {
    margin-left: 20px;
    line-height: 88px;
  }
`

export const VerticalHeading = styled(Heading)`
  /* make it vertical text */
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -88px;
`

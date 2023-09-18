import React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import { RemSizes, colors } from "../styles"
import { Heading } from "./common"
import { StyledHeading } from "./common/Heading"

const OuterBox = styled.main`
  width: 100%;
  max-width: 1332px;
  position: relative;
  margin: 0 auto;
`

const HeadingContainer = styled.div`
  ${StyledHeading} {
    user-select: none;
  }

  ${StyledHeading}:first-child {
    margin-bottom: 0;
    line-height: 88px;
  }

  ${StyledHeading}:last-child {
    position: absolute;
    top: 88px;
    left: -68px;

    /* make it vertical text */
    writing-mode: vertical-rl;
    text-orientation: upright;
    letter-spacing: -88px;
  }
`

const InnerBox = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: 50vh;
  padding: ${RemSizes.xxlarge};

  border-top: 1px solid ${colors.black};
  border-left: 1px solid ${colors.black};
`

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <OuterBox>
        <HeadingContainer>
          <Heading size="xlarge" color="blue" font="heading">
            Critter
          </Heading>
          <Heading size="xlarge" color="blue" font="heading">
            orner
          </Heading>
        </HeadingContainer>
        <InnerBox>{children}</InnerBox>
      </OuterBox>
    </>
  )
}

export default Layout

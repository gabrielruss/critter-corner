import React from "react"
import styled from "styled-components"

import GlobalStyle from "../styles/global"
import { RemSizes, colors } from "../styles"
import { Flex, Heading } from "./common"
import { StyledHeading } from "./common/Heading"

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

const Container = styled.div`
  width: 100%;
  max-width: 1332px;
  margin: 0 auto;

  ${StyledHeading} {
    user-select: none;
  }
`

const TopBox = styled.div`
  ${StyledHeading} {
    margin-left: 20px;
    line-height: 88px;
  }
`

const VerticalHeading = styled(Heading)`
  /* make it vertical text */
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -88px;
`

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />

      <Container>
        <TopBox>
          <Heading size="xlarge" color="blue" font="heading" margin={0}>
            Critter
          </Heading>
        </TopBox>
        <Flex>
          <VerticalHeading size="xlarge" color="blue" font="heading" margin={0}>
            orner
          </VerticalHeading>
          <InnerBox>{children}</InnerBox>
        </Flex>
      </Container>
    </>
  )
}

export default Layout

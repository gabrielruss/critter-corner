import React from "react"
import GlobalStyle from "../styles/global"
import { Flex, Heading } from "./common"
import { Container, TopBox, VerticalHeading, InnerBox } from "./Layout.styled"

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

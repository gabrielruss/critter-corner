import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import Home from "../components/home/Home"
import { Heading } from "../components/common"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Heading as="h6" size="small" margin={24}>
        I am leaving this page as an example. The project mentioned we may
        expand the site in the future to many different animals. In a real world
        scenario, this would have been done at a later time and I would have
        only pushed up a page with Dogs at the root.
      </Heading>
      <Home />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <title>{data.site.siteMetadata.title}</title>
}

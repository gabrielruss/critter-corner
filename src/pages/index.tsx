import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import Home from "../components/home/Home"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* TODO: put a flag in contentful to show or not show the home page */}
      {/* This would be helpful for when expanding to more than 1 animal */}
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

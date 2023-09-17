import React from "react"
import Layout from "../../components/Layout"
import { HeadFC } from "gatsby"

function Dogs() {
  return (
    <Layout>
      <h1>Dog Breeds</h1>
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Dog Breeds</title>

export default Dogs

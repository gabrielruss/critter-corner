import React from "react"
import { HeadFC, graphql } from "gatsby"

import Layout from "../../components/Layout"
import AnimalBreedList from "../../components/animal/AnimalBreedList"
import { Heading } from "../../components/common"
import { DataWrapper, ContentfulAnimal } from "../../types"

function AnimalBreed({
  data: { contentfulAnimal },
}: DataWrapper<ContentfulAnimal>) {
  return (
    <Layout>
      <Heading>{contentfulAnimal.pageTitle}</Heading>
      <AnimalBreedList species={contentfulAnimal.species} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulAnimal(id: { eq: $id }) {
      species
      pageTitle
    }
  }
`

export const Head: HeadFC<ContentfulAnimal> = ({
  data: { contentfulAnimal },
}: DataWrapper<ContentfulAnimal>) => {
  return <title>{contentfulAnimal.pageTitle}</title>
}

export default AnimalBreed

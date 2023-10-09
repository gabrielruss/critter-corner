import React from "react"
import { HeadFC, graphql } from "gatsby"
import { DataWrapper, ContentfulDogBreed } from "../../types"
import Layout from "../../components/Layout"
import {
  ImageOnLeft,
  ImageOnRight,
  Vertical,
} from "../../components/animal/templates"

function DogBreed({
  data: { contentfulDogBreed },
}: DataWrapper<ContentfulDogBreed>) {
  const renderTemplate = () => {
    switch (contentfulDogBreed.layout) {
      case "image-left":
        return <ImageOnLeft dogBreed={contentfulDogBreed} />
      case "mobile":
        return <Vertical dogBreed={contentfulDogBreed} />
      default:
        // image-right is the default layout
        return <ImageOnRight dogBreed={contentfulDogBreed} />
    }
  }

  return <Layout>{renderTemplate()}</Layout>
}

export const query = graphql`
  query ($id: String) {
    contentfulDogBreed(id: { eq: $id }) {
      name
      description {
        description
      }
      origin
      lifespan
      friendliness
      sheddingAmount

      layout

      image {
        url
      }
    }
  }
`

export const Head: HeadFC<ContentfulDogBreed> = ({
  data: { contentfulDogBreed },
}: DataWrapper<ContentfulDogBreed>) => {
  return <title>{contentfulDogBreed.name}</title>
}

export default DogBreed

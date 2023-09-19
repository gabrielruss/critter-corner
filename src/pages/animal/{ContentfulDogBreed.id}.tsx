import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import { Flex, Heading, Image, Text } from "../../components/common"
import { DataWrapper } from "../../types"
import { ContentfulDogBreed } from "../../types/dogBreed"

const DogBreedContainer = styled(Flex)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
`

function DogBreed({
  data: { contentfulDogBreed },
}: DataWrapper<ContentfulDogBreed>) {
  console.log(contentfulDogBreed)

  return (
    <Layout>
      <DogBreedContainer>
        <Flex direction="column" gap={20}>
          <Heading>{contentfulDogBreed.name}</Heading>
          <Flex direction="column" gap={12}>
            <Text>
              <b>Origin:</b> {contentfulDogBreed.origin}
            </Text>
            <Text>
              <b>Lifespan:</b> {contentfulDogBreed.lifespan}
            </Text>
            <Text>
              <b>Friendliness:</b> {contentfulDogBreed.friendliness}
            </Text>
            <Text>
              <b>Shedding Amount:</b> {contentfulDogBreed.sheddingAmount}
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={20}>
          <Image
            src={contentfulDogBreed.image.url}
            alt={contentfulDogBreed.name}
            height={400}
          />
          <Text>{contentfulDogBreed.description.description}</Text>
        </Flex>
      </DogBreedContainer>
    </Layout>
  )
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

      image {
        url
      }
    }
  }
`

export default DogBreed

import React from "react"
import { HeadFC, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { Flex, Heading, Image, Text } from "../components/common"
import { ContentfulDogBreed, DataWrapper } from "../types"
import { colors } from "../styles"

const DogBreedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`

const Divider = styled.hr`
  margin: 0;
  border: 1px solid ${colors.black};
  width: 100%;
`

function DogBreed({
  data: { contentfulDogBreed },
}: DataWrapper<ContentfulDogBreed>) {
  console.log(contentfulDogBreed)

  return (
    <Layout>
      <DogBreedContainer>
        <Flex direction="column" gap={20}>
          <Heading margin={0}>{contentfulDogBreed.name}</Heading>
          <Divider />
          <Flex direction="column" gap={12}>
            <Text>
              <b>Origin:</b> {contentfulDogBreed.origin}
            </Text>
            <Text>
              <b>Lifespan:</b> {contentfulDogBreed.lifespan} years
            </Text>
            <Text>
              <b>Friendliness:</b> {contentfulDogBreed.friendliness} out of 5
            </Text>
            <Text>
              <b>Shedding Amount:</b> {contentfulDogBreed.sheddingAmount} out of
              5
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={20}>
          <Image
            src={contentfulDogBreed.image?.url}
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

export const Head: HeadFC<ContentfulDogBreed> = ({
  data: { contentfulDogBreed },
}: DataWrapper<ContentfulDogBreed>) => {
  return <title>{contentfulDogBreed.name}</title>
}

export default DogBreed

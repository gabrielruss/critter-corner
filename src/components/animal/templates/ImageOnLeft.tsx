import React from "react"
import styled from "styled-components"
import { Divider, Flex, Heading, Image, Text } from "../../common"
import AnimalDetails from "../AnimalDetails"
import { DogBreed } from "../../../types"

const ImageOnLeftContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`

function ImageOnLeft({ dogBreed }: { dogBreed: DogBreed }) {
  return (
    <ImageOnLeftContainer>
      <Flex direction="column" gap={20}>
        <Image src={dogBreed.image?.url} alt={dogBreed.name} height={400} />
        <Text>{dogBreed.description.description}</Text>
      </Flex>
      <Flex direction="column" gap={20}>
        <Heading margin={0}>{dogBreed.name}</Heading>
        <Divider />
        <AnimalDetails
          pickProperties={[
            "origin",
            "lifespan",
            "friendliness",
            "sheddingAmount",
          ]}
          dogBreed={dogBreed}
        />
      </Flex>
    </ImageOnLeftContainer>
  )
}

export default ImageOnLeft

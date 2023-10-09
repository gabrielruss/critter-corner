import React from "react"
import styled from "styled-components"
import { Divider, Flex, Heading, Image, Text } from "../../common"
import AnimalDetails from "../AnimalDetails"
import { DogBreed } from "../../../types"

const ImageOnRightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`

function ImageOnRight({ dogBreed }: { dogBreed: DogBreed }) {
  return (
    <ImageOnRightContainer>
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
      <Flex direction="column" gap={20}>
        <Image src={dogBreed.image?.url} alt={dogBreed.name} height={400} />
        <Text>{dogBreed.description.description}</Text>
      </Flex>
    </ImageOnRightContainer>
  )
}

export default ImageOnRight

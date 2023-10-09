import React from "react"
import styled from "styled-components"
import { Divider, Flex, Heading, Image, Text } from "../../common"
import AnimalDetails from "../AnimalDetails"
import { DogBreed } from "../../../types"

const VerticalContainer = styled.div`
  display: grid;
  gap: 20px;
`

function Vertical({ dogBreed }: { dogBreed: DogBreed }) {
  return (
    <VerticalContainer>
      <Flex direction="column" gap={20}>
        <Image src={dogBreed.image?.url} alt={dogBreed.name} height={400} />
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
        <Text>{dogBreed.description.description}</Text>
      </Flex>
    </VerticalContainer>
  )
}

export default Vertical

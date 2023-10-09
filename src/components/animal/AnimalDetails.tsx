import React, { useMemo } from "react"
import { Flex, Text } from "../common"
import { DogBreed } from "../../types"
import styled from "styled-components"
import { addSpaceToCamelCase } from "../../utils/regex"

type AnimalDetailsProps = {
  dogBreed: DogBreed
  // create a type that has to be an array of keys from the ContentfulDogBreed type
  pickProperties: Array<keyof DogBreed>
}

const CapitalizedBold = styled.b`
  text-transform: capitalize;
  font-weight: bold;
`

function AnimalDetails({ dogBreed, pickProperties }: AnimalDetailsProps) {
  const renderPickedProperties = useMemo(() => {
    return pickProperties.map((property) => {
      let propertyValue = String(dogBreed[property])

      if (property === "friendliness" || property === "sheddingAmount") {
        propertyValue = propertyValue + " out of 5"
      }

      if (property === "lifespan") {
        propertyValue = propertyValue + " years"
      }

      // TODO there would be more cases to handle here

      return (
        <Text key={property}>
          <CapitalizedBold>{addSpaceToCamelCase(property)}:</CapitalizedBold>{" "}
          {propertyValue}
        </Text>
      )
    })
  }, [dogBreed, pickProperties])

  return (
    <Flex direction="column" gap={12}>
      {renderPickedProperties}
    </Flex>
  )
}

export default AnimalDetails

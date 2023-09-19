import React from "react"
import styled from "styled-components"

import getBreedListQuery from "./hooks/getBreedListQuery"
import { RemSizes } from "../../styles"
import { AutoGrid, Card, StyledLink } from "../common"
import { AllBreed } from "../../types"

type AnimalBreedListProps = {
  species: string
}

const StyledAnimalBreedList = styled.div`
  padding: ${RemSizes.xxlarge};
`

function AnimalBreedList({ species }: AnimalBreedListProps) {
  const breedList: Array<AllBreed> = getBreedListQuery({ species })

  return (
    <StyledAnimalBreedList>
      <AutoGrid minWidth={300} maxWidth={500} gap={20}>
        {breedList.map((breed) => (
          <StyledLink to={`/animal/${breed.id}`} key={breed.id}>
            <Card
              image={breed.image?.url ?? ""}
              name={breed.name}
              description={breed.description.description}
            />
          </StyledLink>
        ))}
      </AutoGrid>
    </StyledAnimalBreedList>
  )
}

export default AnimalBreedList

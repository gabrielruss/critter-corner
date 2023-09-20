import React from "react"
import styled from "styled-components"

import { Animal } from "../../types"
import { RemSizes, boxShadow, hoverStyles } from "../../styles"
import { Flex, Image, StyledLink, Text } from "../common"
import { StyledText } from "../common/Text"
import { StyledImage } from "../common/Image"

type AnimalCardProps = {
  animal: Animal
}

const StyledAnimalCard = styled(StyledLink)`
  border-radius: ${RemSizes.medium};
  width: 200px;
  cursor: pointer;
  box-shadow: ${boxShadow.normal};

  ${StyledText} {
    margin: ${RemSizes.xxlarge} ${RemSizes.medium};
  }

  ${StyledImage} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${hoverStyles}
`

function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <StyledAnimalCard to={`${animal.species}`}>
      <Flex direction="column" align="center">
        <Image src={animal.image?.url} alt={animal.displayName} />
        <Text weight="bold">{animal.displayName}</Text>
      </Flex>
    </StyledAnimalCard>
  )
}

export default AnimalCard

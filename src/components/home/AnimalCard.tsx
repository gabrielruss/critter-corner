import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Animal } from "../../types"
import Text, { StyledText } from "../common/Text"
import Image, { StyledImage } from "../common/Image"
import Flex from "../common/Flex"
import { RemSizes, colors } from "../../styles"
import { getContentfulImageUrl } from "../../utils/contentful"

type AnimalCardProps = {
  animal: Animal
}

const StyledAnimalCard = styled(Link)`
  /* remove Link styles */
  text-decoration: none;
  color: inherit;
  background-color: ${colors.white};

  border-radius: ${RemSizes.medium};
  width: 200px;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

  ${StyledText} {
    margin: ${RemSizes.xxlarge} ${RemSizes.medium};
  }

  ${StyledImage} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
  }
`

function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <StyledAnimalCard to={animal.species}>
      <Flex direction="column" align="center">
        <Image
          src={getContentfulImageUrl(animal.image)}
          alt={animal.displayName}
        />
        <Text weight="bold">{animal.displayName}</Text>
      </Flex>
    </StyledAnimalCard>
  )
}

export default AnimalCard

import React from "react"
import styled from "styled-components"

import { RemSizes, borderRadius, hoverStyles } from "../../styles"
import { Flex, Heading, Image, Text } from "."
import { StyledText } from "./Text"

type CardProps = {
  image: string
  name: string
  description: string
  imageAltText?: string
}

const CardContainer = styled.div`
  /* TODO: fix border */
  border: 1px solid #ccc;
  border-radius: ${borderRadius.medium};
  padding: ${RemSizes.large};

  ${hoverStyles}

  > * {
    user-select: none;
  }

  ${StyledText} {
    /* ellipses text when it hits max height of container */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

function Card({ image, name, description, imageAltText }: CardProps) {
  return (
    <CardContainer>
      <Flex direction="column">
        <Image src={image} alt={imageAltText ?? name} />
        <Heading>{name}</Heading>
        <Text size="small">{description}</Text>
      </Flex>
    </CardContainer>
  )
}

export default Card

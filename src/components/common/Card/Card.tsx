import React from "react"
import { Flex, Heading, Image, Text } from ".."
import { CardContainer } from "./styles/Card.styled"
import { CardProps } from "./types"

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

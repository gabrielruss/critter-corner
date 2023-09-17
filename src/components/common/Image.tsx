import React from "react"
import styled from "styled-components"
import { borderRadius } from "../../styles"

type ImageProps = {
  src: string
  alt: string
  height?: number
  borderRadius?: keyof typeof borderRadius
}

export const StyledImage = styled("img").withConfig({
  shouldForwardProp: (prop) => !["borderRadius"].includes(prop),
})<ImageProps>`
  width: 100%;
  object-fit: cover;

  border-radius: ${(props) =>
    props.borderRadius && borderRadius[props.borderRadius]};
`

function Image({
  src,
  alt,
  height = 200,
  borderRadius = "medium",
}: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      height={height}
      borderRadius={borderRadius}
    />
  )
}

export default Image

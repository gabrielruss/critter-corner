import React from "react"
import { StyledImage } from "./styles/Image.styled"
import { ImageProps } from "./types"

function Image({
  src,
  alt,
  height = 200,
  borderRadius = "medium",
  className,
}: ImageProps) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      height={height}
      borderRadius={borderRadius}
      className={className}
    />
  )
}

export default Image

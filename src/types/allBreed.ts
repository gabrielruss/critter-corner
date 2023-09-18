import { ContentfulImage } from "./contentful"

type AllBreed = {
  id: string
  name: string
  description: {
    description: string
  }
  image: ContentfulImage
}

export default AllBreed

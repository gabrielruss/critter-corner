import { ContentfulImage } from "./contentful"

type Animal = {
  id: string
  species: string
  displayName: string
  image: ContentfulImage
}

export type AllContentfulAnimal = {
  allContentfulAnimal: {
    nodes: Array<Animal>
  }
}

export default Animal

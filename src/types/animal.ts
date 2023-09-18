import { ContentfulImage } from "./contentful"

type Animal = {
  id: string
  species: string
  displayName: string
  image: ContentfulImage
  pageTitle: string
}

export type AllContentfulAnimal = {
  allContentfulAnimal: {
    nodes: Array<Animal>
  }
}

export type ContentfulAnimal = {
  contentfulAnimal: Animal
}

export default Animal

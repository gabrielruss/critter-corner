import AllBreed from "./allBreed"

type DogBreedTemplates = "image-right" | "image-left" | "mobile"

type DogBreed = AllBreed & {
  origin: string
  lifespan: string
  friendliness: number
  sheddingAmount: number
  layout: DogBreedTemplates
}

export type AllContentfulDogBreed = {
  allContentfulDogBreed: {
    nodes: Array<DogBreed>
  }
}

export type ContentfulDogBreed = {
  contentfulDogBreed: DogBreed
}

export default DogBreed

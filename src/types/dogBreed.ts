import AllBreed from "./allBreed"

type DogBreed = AllBreed & {
  origin: string
  lifespan: string
  friendliness: number
  sheddingAmount: number
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

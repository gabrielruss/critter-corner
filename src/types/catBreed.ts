import AllBreed from "./allBreed"

type CatBreed = AllBreed & {
  origin: string
  lifespan: string
  friendliness: number
  sheddingAmount: number
}

export type AllContentfulCatBreed = {
  allContentfulCatBreed: {
    nodes: Array<CatBreed>
  }
}

export default CatBreed

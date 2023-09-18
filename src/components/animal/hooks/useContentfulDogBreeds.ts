import { graphql, useStaticQuery } from "gatsby"
import { AllContentfulDogBreed, DogBreed } from "../../../types"

const useContentfulDogBreeds = (): Array<DogBreed> => {
  const { allContentfulDogBreed } =
    useStaticQuery<AllContentfulDogBreed>(graphql`
      query {
        allContentfulDogBreed {
          nodes {
            id
            name
            description {
              description
            }
            image {
              url
            }
          }
        }
      }
    `)

  return allContentfulDogBreed.nodes
}

export default useContentfulDogBreeds

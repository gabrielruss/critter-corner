import { graphql, useStaticQuery } from "gatsby"
import { AllContentfulAnimal, Animal } from "../../../types"

const useContentfulAnimals = (): Array<Animal> => {
  const { allContentfulAnimal } = useStaticQuery<AllContentfulAnimal>(graphql`
    query {
      allContentfulAnimal {
        nodes {
          id
          species
          displayName
          image {
            url
          }
        }
      }
    }
  `)

  return allContentfulAnimal.nodes
}

export default useContentfulAnimals

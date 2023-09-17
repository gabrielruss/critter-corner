import { graphql, useStaticQuery } from "gatsby"
import Animal, { AllContentfulAnimal } from "../types/animal"

const useContentfulAnimals = (): Array<Animal> => {
  const { allContentfulAnimal } = useStaticQuery<AllContentfulAnimal>(graphql`
    query {
      allContentfulAnimal {
        nodes {
          id
          species
          displayName
          image {
            fields {
              file {
                en_US {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  return allContentfulAnimal.nodes
}

export default useContentfulAnimals

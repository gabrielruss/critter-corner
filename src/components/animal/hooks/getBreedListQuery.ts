import useContentfulDogBreeds from "./useContentfulDogBreeds"

type GetBreedListQueryProps = {
  species: string
}

function getBreedListQuery({ species }: GetBreedListQueryProps) {
  switch (species) {
    case "dogs":
      return useContentfulDogBreeds()
    case "cats":
      return []
    default:
      return []
  }
}

export default getBreedListQuery

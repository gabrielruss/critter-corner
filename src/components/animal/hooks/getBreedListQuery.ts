import useContentfulDogBreeds from "./useContentfulDogBreeds"

type GetBreedListQueryProps = {
  species: string
}

function getBreedListQuery({ species }: GetBreedListQueryProps) {
  switch (species) {
    case "dogs":
      return useContentfulDogBreeds()
    case "cats":
      // this would return the cats query
      return []
    default:
      return []
  }
}

export default getBreedListQuery

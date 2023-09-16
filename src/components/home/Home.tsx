import React, { Fragment } from "react"

import AutoGrid from "../common/AutoGrid"
import AnimalCard from "./AnimalCard"

const DUMMY_ANIMAL_LIST = [
  {
    id: 1,
    species: "dogs",
    display: "Dogs",
    image: "https://placedog.net/500",
  },
  {
    id: 2,
    species: "cats",
    display: "Cats",
    image: "https://placekitten.com/500",
  },
]

function Home() {
  return (
    <>
      <AutoGrid justifyItems="center" gap={16}>
        {DUMMY_ANIMAL_LIST.map((animal) => (
          <Fragment key={animal.id}>
            <AnimalCard animal={animal} />
          </Fragment>
        ))}
      </AutoGrid>
    </>
  )
}

export default Home

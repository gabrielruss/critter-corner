import React, { Fragment } from "react"

import AnimalCard from "./AnimalCard"
import useContentfulAnimals from "./hooks/useContentfulAnimals"
import { AutoGrid } from "../common"

function Home() {
  const animals = useContentfulAnimals()

  return (
    <>
      <AutoGrid justifyItems="center" gap={16}>
        {animals.map((animal) => (
          <Fragment key={animal.id}>
            <AnimalCard animal={animal} />
          </Fragment>
        ))}
      </AutoGrid>
    </>
  )
}

export default Home

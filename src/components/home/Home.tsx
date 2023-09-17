import React, { Fragment } from "react"

import AutoGrid from "../common/AutoGrid"
import AnimalCard from "./AnimalCard"
import useContentfulAnimals from "../../hooks/useContentfulAnimals"

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

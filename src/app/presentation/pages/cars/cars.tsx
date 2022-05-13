import { useEffect } from 'react'

import { useLazyLoadCarsQuery } from '~/app/presentation/hooks'

import { ContentContainer, RootContainer } from './cars-styles'

const CarsPage = () => {
  const [loadCars, { data: cars }] = useLazyLoadCarsQuery()
  useEffect(() => {
    loadCars()
  }, [])

  return (
    <RootContainer>
      <ContentContainer>
        {cars?.map((car) => (
          <h1 key={car?.id}>{car?.name}</h1>
        ))}
      </ContentContainer>
    </RootContainer>
  )
}

export default CarsPage

import { useEffect, useState } from 'react'

import { Box, Button } from '@mui/material'

import {
  useLazyLoadCarsQuery,
  useTranslation,
  useDeletCarsMutation
} from '~/app/presentation/hooks'

import {
  ContentContainer,
  CarsContainer,
  RootContainer,
  ListCarsContainer
} from './cars-styles'
import { ModalFormCars } from './components'
import { PropsModalFormCars } from './components/modal-cars-form/modal-cars-form'

const CarsPage = () => {
  const { translate } = useTranslation()
  const [loadCars, { data: cars }] = useLazyLoadCarsQuery()
  const [deletCar] = useDeletCarsMutation()

  const [dataModal, setDataModal] = useState<PropsModalFormCars>({
    isVisible: false,
    onClose: () => {
      setDataModal((prevent) => ({
        ...prevent,
        isVisible: false,
        idCars: null
      }))
    }
  })

  const handleDeletCar = (id: string) => {
    deletCar({ id: id })
  }
  useEffect(() => {
    loadCars()
  }, [])

  return (
    <RootContainer>
      <>
        <ContentContainer>
          <>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              data-testid='submit-button'
              onClick={() => {
                setDataModal((prevent) => ({
                  ...prevent,
                  idCars: null,
                  isVisible: true
                }))
              }}
            >
              {translate('actions.create')}
            </Button>
            {dataModal.isVisible && <ModalFormCars {...dataModal} />}
            <ListCarsContainer>
              {cars?.map((car) => (
                <CarsContainer key={car.id}>
                  <img src={car.photoUrl} alt={`foto do carro ${car.name}`} />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1
                    }}
                  >
                    <strong>{car.name}</strong>
                    <p>{car.placa}</p>
                  </Box>
                  <button
                    type='button'
                    onClick={() => {
                      handleDeletCar(car.id)
                    }}
                  >
                    {translate('actions.delet')}
                  </button>
                </CarsContainer>
              ))}
            </ListCarsContainer>
          </>
        </ContentContainer>
      </>
    </RootContainer>
  )
}

export default CarsPage

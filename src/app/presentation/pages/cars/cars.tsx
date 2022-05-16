import { useEffect, useState } from 'react'

import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

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

type DialogProps = {
  isVisible: boolean
  idCar?: string
}

const CarsPage = () => {
  const { translate } = useTranslation()
  const [loadCars, { data: cars }] = useLazyLoadCarsQuery()
  const [deletCar] = useDeletCarsMutation()
  const [openDialog, setOpenDialog] = useState<DialogProps>({
    isVisible: false
  })

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
  const handleCloseDialog = () => {
    setOpenDialog({ isVisible: false, idCar: null })
  }
  const handleDeletCar = (id: string) => {
    deletCar({ id: id })
    handleCloseDialog()
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
                      flex: 1,
                      padding: '10px'
                    }}
                  >
                    <strong>{car.name}</strong>
                    <p>{car.placa}</p>
                  </Box>
                  <Box>
                    <button
                      type='button'
                      onClick={() => {
                        setDataModal((prevent) => ({
                          ...prevent,
                          car: car,
                          isVisible: true
                        }))
                      }}
                    >
                      {translate('actions.update')}
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        setOpenDialog({ isVisible: true, idCar: car.id })
                      }}
                    >
                      {translate('actions.delet')}
                    </button>
                  </Box>
                </CarsContainer>
              ))}
            </ListCarsContainer>

            <Dialog
              open={openDialog.isVisible}
              onClose={handleCloseDialog}
              aria-labelledby='alert-dialog-title'
              aria-describedby='alert-dialog-description'
            >
              <DialogTitle id='alert-dialog-title'>
                {'Deseja mesmo deletar esse carro?'}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Cancelar</Button>
                <Button
                  onClick={() => {
                    handleDeletCar(openDialog.idCar)
                  }}
                  autoFocus
                >
                  Deletar
                </Button>
              </DialogActions>
            </Dialog>
          </>
        </ContentContainer>
      </>
    </RootContainer>
  )
}

export default CarsPage

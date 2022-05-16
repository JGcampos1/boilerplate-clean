import { Box, Button } from '@mui/material'

import { CreateCar, UpdateCar } from '~/app/domain/usecases/cars'

import { TextInput } from '~/app/presentation/components'
import {
  useCreateCarsMutation,
  useTranslation,
  useUpdateCarMutation
} from '~/app/presentation/hooks'
import {
  Container,
  FormContainer
} from '~/app/presentation/pages/cars/components/modal-cars-form/styled'
import { FormProvider } from '~/app/presentation/providers'

export interface PropsModalFormCars {
  onClose: () => void
  car?: UpdateCar.Params
  isVisible: boolean
}
const ModalCarsForm = ({ car, onClose }: PropsModalFormCars) => {
  const [createCars] = useCreateCarsMutation()
  const [updateCar] = useUpdateCarMutation()
  const { translate } = useTranslation()

  const onCreate = async (values: CreateCar.Params) => {
    createCars(values)
    onClose()
  }
  const onUpdate = (values: UpdateCar.Params) => {
    updateCar({ ...values, id: car.id })
    onClose()
  }

  const handleCloseModal = (e: any) => {
    if (e.target.id === 'modal') {
      onClose()
    }
  }

  return (
    <Container id='modal' onClick={(e) => handleCloseModal(e)}>
      <FormProvider mode='onBlur' defaultValues={car}>
        {({ handleSubmit }) => (
          <FormContainer onSubmit={handleSubmit(car?.id ? onUpdate : onCreate)}>
            <div>
              <h1>
                {car?.id ? `Editar carro com id: ${car.id}` : 'Criar Carro'}
              </h1>
              <TextInput
                sx={{
                  pb: 2
                }}
                name='name'
                label={'common:NOME_CAR'}
                autoComplete=''
                defaultValue={car?.name}
              />
              <TextInput
                name='placa'
                label={'common:PLACA_CAR'}
                type='placa'
                defaultValue={car?.placa}
                sx={{
                  pb: 2
                }}
              />
              <TextInput
                name='photoUrl'
                label={'common:LINK_IMAGEM_CAR'}
                type='photoUrl'
                defaultValue={car?.photoUrl}
              />
            </div>
            <Box
              sx={{
                mt: 2
              }}
            >
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                data-testid='submit-button'
              >
                {translate('actions.enter')}
              </Button>
            </Box>
          </FormContainer>
        )}
      </FormProvider>
    </Container>
  )
}

export default ModalCarsForm

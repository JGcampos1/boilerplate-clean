import { Box, Button } from '@mui/material'

import { CreateCar } from '~/app/domain/usecases/cars'

import { TextInput } from '~/app/presentation/components'
import { useCreateCarsMutation, useTranslation } from '~/app/presentation/hooks'
import {
  Container,
  FormContainer
} from '~/app/presentation/pages/cars/components/modal-cars-form/styled'
import { FormProvider } from '~/app/presentation/providers'

export interface PropsModalFormCars {
  onClose: () => void
  idCars?: string
  isVisible: boolean
}
const ModalCarsForm = ({ idCars, onClose }: PropsModalFormCars) => {
  const [createCars] = useCreateCarsMutation()
  const { translate } = useTranslation()

  const onCreate = async (values: CreateCar.Params) => {
    createCars(values)
    onClose()
  }
  const onUpdate = (e: any) => {
    // eslint-disable-next-line no-console
    console.log(e)
  }

  const handleCloseModal = (e: any) => {
    if (e.target.id === 'modal') {
      onClose()
    }
  }

  return (
    <Container id='modal' onClick={(e) => handleCloseModal(e)}>
      <FormProvider mode='onBlur'>
        {({ handleSubmit }) => (
          <FormContainer onSubmit={handleSubmit(idCars ? onUpdate : onCreate)}>
            <div>
              <TextInput
                sx={{
                  pb: 2
                }}
                name='name'
                label={'common:NOME_CAR'}
                autoComplete=''
              />
              <TextInput
                name='placa'
                label={'common:PLACA_CAR'}
                type='placa'
                sx={{
                  pb: 2
                }}
              />
              <TextInput
                name='photoUrl'
                label={'common:LINK_IMAGEM_CAR'}
                type='photoUrl'
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

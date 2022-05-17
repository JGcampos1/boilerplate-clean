import { UpdateCar } from '~/app/domain/usecases'

export type PropsModalFormCars = {
  onClose: () => void
  car?: UpdateCar.Params
  isVisible: boolean
}

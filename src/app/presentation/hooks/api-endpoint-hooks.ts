import { authApi } from '~/store/features/auth'
import { carsApi } from '~/store/features/cars'

export const { useEmailSignInMutation } = authApi
export const { useLazyLoadCarsQuery, useCreateCarsMutation } = carsApi

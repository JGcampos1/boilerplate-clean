import { getDependencies } from '~/app/../ioc/helpers/get-dependencies'
import { ServicesTypes } from '~/app/../ioc/types'
import { apiSlice } from '~/app/../store/features/api/slice/api-slice'
import { queryAdapter } from '~/app/../store/helpers'

import { ListCars, CreateCar } from '~/app/domain/usecases'

const [loadCarsService, createCarsService] = getDependencies<
  [ListCars, CreateCar]
>([ServicesTypes.CAR.LIST_CAR, ServicesTypes.CAR.CREATE_CAR])

export const carsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loadCars: builder.query<ListCars.Model, void>({
      queryFn: async () => queryAdapter(loadCarsService.load()),
      providesTags: (result) =>
        result
          ? [
              ...result?.map(({ id }) => ({
                type: 'CarsList' as const,
                id
              })),
              'CarsList'
            ]
          : ['CarsList']
    }),
    createCars: builder.mutation<void, CreateCar.Params>({
      queryFn: async (params) => queryAdapter(createCarsService.add(params)),
      invalidatesTags: ['CarsList']
    })
  })
})

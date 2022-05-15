import { getDependencies } from '~/app/../ioc/helpers/get-dependencies'
import { ServicesTypes } from '~/app/../ioc/types'
import { apiSlice } from '~/app/../store/features/api/slice/api-slice'
import { queryAdapter } from '~/app/../store/helpers'

import { ListCars, CreateCar, DeletCar } from '~/app/domain/usecases'

const [loadCarsService, createCarsService, deletCarService] = getDependencies<
  [ListCars, CreateCar, DeletCar]
>([
  ServicesTypes.CAR.LIST_CAR,
  ServicesTypes.CAR.CREATE_CAR,
  ServicesTypes.CAR.DELET_CAR
])

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
    }),
    deletCars: builder.mutation<void, { id: string }>({
      queryFn: async (params) =>
        queryAdapter(deletCarService.delete(params.id)),
      invalidatesTags: ['CarsList']
    })
  })
})

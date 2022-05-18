import { createApi } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: null,
  tagTypes: ['CarsList'],
  reducerPath: 'api',
  endpoints: () => ({}),
  refetchOnMountOrArgChange: 15
})

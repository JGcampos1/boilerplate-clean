import { QueryManagement, QueryStatus } from '../types'

export const makeQueryManagementData = <T>(
  initialData?: T extends void ? null : T
): QueryManagement<T> => ({
  data: initialData,
  error: '',
  preventLoading: false,
  status: QueryStatus.IDLE
})

export type Paginated<T> = {
  rows: T
  count: number
  firstItemOnPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  lastItemOnPage: number
  numberOfFirstItemOnPage: number
  numberOfLastItemOnPage: number
  page: number
  pageCount: number
  pageNumberIsGood: boolean
  pageSize: number
}

export type PaginatedParams = {
  page: number
  pageSize?: number
  keywords?: string
}

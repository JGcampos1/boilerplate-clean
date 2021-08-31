import { useCallback, useEffect, useMemo, useState } from 'react'

import { Paginated, PaginatedParams } from '~/app/domain/common/types'

import { useDebounce } from './use-debounce'

type UseQueryParams<T = unknown> = {
  pageSize?: number
  data: Paginated<T>
  fetcher: (params: PaginatedParams) => void
}

type UsePaginatedQueryTypes = Omit<Paginated<unknown>, 'rows'> & {
  setKeyword: (keyword: string) => void
  nextPage: () => void
  prevPage: () => void
  setPage: (page: number) => void
  page: number
}

export const usePagination = <T = unknown>({
  fetcher,
  data,
  pageSize: defaultPageSize = 3
}: UseQueryParams<T>): UsePaginatedQueryTypes => {
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(defaultPageSize)
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce(keyword, 500)

  useEffect(() => {
    fetcher({ page, pageSize, keywords: debouncedKeyword })
  }, [fetcher, page, pageSize, debouncedKeyword])

  useEffect(() => {
    if (data) {
      setPage(data.page)
      setPageSize(data.pageSize)
    }
  }, [data])

  const setNewKeyword = useCallback(
    (keyword) => {
      setPage(0)
      setPageSize(defaultPageSize)
      setKeyword(keyword)
    },
    [defaultPageSize]
  )

  const isLastPage = useCallback(
    (): boolean => data?.isLastPage,
    [data?.isLastPage]
  )
  const isFirstPage = useCallback(
    (): boolean => data?.isFirstPage,
    [data?.isFirstPage]
  )

  const nextPage = useCallback((): void => {
    if (isLastPage()) {
      return null
    }
    setPage((prev) => {
      return prev + 1
    })
  }, [isLastPage])

  const prevPage = useCallback((): void => {
    if (isFirstPage()) {
      return null
    }

    setPage((prev) => {
      return prev - 1
    })
  }, [isFirstPage])

  const handlePage = useCallback((page: number) => {
    setPage(page - 1)
  }, [])

  const paginationData = useMemo(() => {
    const { ...paginationData } = data

    delete paginationData.rows

    return paginationData
  }, [data])

  return {
    ...paginationData,
    setKeyword: setNewKeyword,
    nextPage,
    prevPage,
    setPage: handlePage,
    page: page + 1
  }
}

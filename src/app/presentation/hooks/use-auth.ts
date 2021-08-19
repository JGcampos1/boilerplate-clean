import { useMemo } from 'react'

import { getUserAuthState } from '~/store/features/auth'

import { useAppSelector } from '.'

export const useAuth = () => {
  const authState = useAppSelector(getUserAuthState)

  return useMemo(() => authState, [authState])
}

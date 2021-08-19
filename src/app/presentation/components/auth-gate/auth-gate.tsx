import { useCallback, useEffect, memo } from 'react'
import { useHistory } from 'react-router-dom'

import { ConstantTypes, InfraTypes } from '~/ioc/types'

import { setToken } from '~/store/features/auth/actions'
import { resetState } from '~/store/helpers'

import { TokenModel } from '~/app/domain/models'

import { CacheStorage } from '~/app/application/protocols/cache'

import { AppRoutes } from '~/app/presentation/common/constants/general'
import { useAppDispatch, useAuth } from '~/app/presentation/hooks'
import { useService } from '~/app/presentation/hooks/use-service'

const AuthGate: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const tokenKey = useService<string>(ConstantTypes.AUTH.TOKEN_KEY)
  const cacheStorage = useService<CacheStorage>(InfraTypes.CACHE_STORAGE)
  const { isAuthenticated, logoutRequested } = useAuth()

  useEffect(() => {
    syncTokenToStore()

    if (isAuthenticated && !isHomePage()) {
      history.replace(AppRoutes.home.navigate())
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (logoutRequested) {
      cacheStorage.set(tokenKey)
      dispatch(resetState('auth'))
    }
  }, [logoutRequested])

  const isHomePage = useCallback(() => {
    return history.location.pathname === AppRoutes.home.path
  }, [history])

  const syncTokenToStore = useCallback(() => {
    const storedToken = cacheStorage.get<TokenModel>(tokenKey)
    if (storedToken && !isAuthenticated) {
      dispatch(setToken(storedToken))
    }
  }, [isAuthenticated])

  return <>{children}</>
}

export default memo(AuthGate)

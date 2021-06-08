import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { InfraTypes } from '~/ioc/types'
import { setToken } from '~/store/features/auth/actions'
import { getUserAuthState } from '~/store/features/auth/selectors'
import { resetState } from '~/store/helpers'
import { TokenModel } from '~/domain/models'
import { CacheStorage } from '~/application/protocols/cache'
import { TOKEN_CACHE_STORAGE_KEY } from '~/presentation/common/constants'
import { AppRoutes } from '~/presentation/common/constants/general'
import { useAppDispatch, useAppSelector } from '~/presentation/hooks'
import { useService } from '~/presentation/hooks/use-service'

const AuthGate: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const cacheStorage = useService<CacheStorage>(InfraTypes.CACHE_STORAGE)
  const { isAuthenticated, logoutRequested } = useAppSelector(getUserAuthState)

  useEffect(() => {
    syncTokenToStore()

    if (isAuthenticated && !isHomePage()) {
      history.replace(AppRoutes.home.navigate())
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (logoutRequested) {
      cacheStorage.set(TOKEN_CACHE_STORAGE_KEY)
      dispatch(resetState('auth'))
    }
  }, [logoutRequested])

  const isHomePage = useCallback(() => {
    return history.location.pathname === AppRoutes.home.path
  }, [history])

  const syncTokenToStore = useCallback(() => {
    const storedToken = cacheStorage.get<TokenModel>(TOKEN_CACHE_STORAGE_KEY)
    if (storedToken && !isAuthenticated) {
      dispatch(setToken(storedToken))
    }
  }, [isAuthenticated])

  return <>{children}</>
}

export default AuthGate

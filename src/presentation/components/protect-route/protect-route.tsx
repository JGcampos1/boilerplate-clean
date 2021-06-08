import { memo } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { getUserAuthState } from '~/store/features/auth/selectors'
import { AppRoutes } from '~/presentation/common/constants/general'
import { useAppSelector } from '~/presentation/hooks'

type Props = RouteProps & {
  private: boolean
}

const ProtectRoute = (props: Props) => {
  const { isAuthenticated } = useAppSelector(getUserAuthState)

  if (props.private) {
    return isAuthenticated ? (
      <Route {...props} />
    ) : (
      <Route
        {...props}
        component={() => <Redirect to={AppRoutes.login.path} />}
      />
    )
  }

  return <Route {...props} />
}

export default memo(ProtectRoute)

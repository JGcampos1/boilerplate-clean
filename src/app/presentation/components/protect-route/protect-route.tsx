import { memo } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { AppRoutes } from '~/app/presentation/common/constants/general'
import { useAuth } from '~/app/presentation/hooks'

type Props = RouteProps & {
  private: boolean
  Layout: React.FC
}

const ProtectRoute: React.FC<Props> = (props) => {
  const { private: isPrivate, Layout } = props
  const { isAuthenticated } = useAuth()

  if (!props.component) return <Redirect to={AppRoutes.login.path} />

  if (isPrivate) {
    return (
      <Layout>
        {isAuthenticated ? (
          <Route {...props} />
        ) : (
          <Route
            {...props}
            component={() => <Redirect to={AppRoutes.login.path} />}
          />
        )}
      </Layout>
    )
  }

  return (
    <Layout>
      <Route {...props} />
    </Layout>
  )
}

export default memo(ProtectRoute)

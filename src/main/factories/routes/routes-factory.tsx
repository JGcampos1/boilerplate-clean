import { Switch } from 'react-router'
import { RoutesConfig } from '~/main/config/routes-config'
import { ProtectRoute } from '~/presentation/components'

export const makeRoutes = () =>
  RoutesConfig.map((route) => {
    if (route.routes?.length > 0) {
      return (
        <ProtectRoute
          exact={route.exact}
          key={route.path}
          private={route.private}
          path={route.path}
          render={({ location }) => (
            <Switch location={location} key={location.key}>
              <ProtectRoute
                key={route.path}
                private={route.private}
                path={route.path}
                component={route.component}
              />
              {route.routes.map((nested) => (
                <ProtectRoute
                  exact={nested.exact}
                  key={nested.path}
                  private={nested.private}
                  path={nested.path}
                  component={nested.component}
                />
              ))}
            </Switch>
          )}
        />
      )
    }
    return (
      <ProtectRoute
        exact={route.exact}
        key={route.path}
        private={route.private}
        path={route.path}
        component={route.component}
      />
    )
  })

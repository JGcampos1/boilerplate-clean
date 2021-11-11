import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { LayoutConfig } from '~/app/main/config/layouts-config'

import { ProtectRoute } from '~/app/presentation/components'

import { IRoute } from '../../types'

export const makeRoutes = (routes: IRoute[]) => {
  return routes.map((route) => {
    const Layout = LayoutConfig[route.layout].component
    if (route.routes) {
      return (
        <Route
          key={route.name}
          render={({ location }) => {
            return (
              <Switch location={location} key={location.key}>
                <ProtectRoute
                  Layout={Layout}
                  exact={route.exact}
                  key={route.path}
                  private={route.private ?? false}
                  path={route.path}
                  component={route.component}
                />
                {route.routes.map((nested) => (
                  <ProtectRoute
                    Layout={Layout}
                    exact={route.exact}
                    key={nested.path}
                    private={nested.private ?? false}
                    path={nested.path}
                    component={nested.component}
                  />
                ))}
              </Switch>
            )
          }}
        />
      )
    }

    return (
      <Switch key={route.path}>
        <ProtectRoute
          Layout={Layout}
          exact={route.exact}
          private={route.private ?? false}
          path={route.path}
          component={route.component}
        />
      </Switch>
    )
  })
}

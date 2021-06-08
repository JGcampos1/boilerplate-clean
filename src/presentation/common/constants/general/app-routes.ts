import { ExtractRouteParams } from 'react-router'
import { generatePath } from 'react-router-dom'
import { RoutesConfig } from '~/main/config/routes-config'

enum RoutesNames {
  LOGIN = 'login',
  HOME = 'home'
}

type AppRouteType = {
  [key in RoutesNames]: {
    path: string
    navigate: <S extends string>(params?: ExtractRouteParams<S>) => string
  }
}

const MakeAppRoutes = () =>
  RoutesConfig.reduce<Partial<AppRouteType>>(
    (accumulator, current) => ({
      ...accumulator,
      [current.name]: {
        path: current.path,
        navigate: <S extends string>(params?: ExtractRouteParams<S>) =>
          generatePath(current.path, params)
      }
    }),
    {}
  )

export const AppRoutes = MakeAppRoutes()
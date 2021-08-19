import { lazy } from 'react'

import { IRoute } from '~/app/main/types'

export const RoutesConfig: IRoute[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    private: true,
    component: lazy(async () => import('~/app/presentation/pages/home/home')),
    layout: 'DefaultLayout'
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: lazy(async () => import('~/app/presentation/pages/login/login')),
    layout: 'DefaultLayout'
  }
]

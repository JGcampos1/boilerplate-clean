import { lazy } from 'react'
import { IRoute } from '~/main/types'

export const RoutesConfig: IRoute[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    private: true,
    component: lazy(async () => import('~/presentation/pages/home/home'))
  },
  {
    name: 'login',
    path: '/login',
    exact: true,
    component: lazy(async () => import('~/presentation/pages/login/login'))
  }
]

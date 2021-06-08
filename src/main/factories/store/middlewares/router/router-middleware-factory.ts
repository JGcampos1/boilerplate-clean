import { routerMiddleware } from 'connected-react-router'
import { browserHistory } from '~/main/router/browser-history'

export const makeRouterMiddleware = () => routerMiddleware(browserHistory)

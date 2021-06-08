import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import { container } from '~/ioc/inversify.config'
import { makeLayouts } from '~/main/factories/layouts'
import { AuthGate, FullPageLoading } from '~/presentation/components'
import { ContainerProvider, ThemeProvider } from '~/presentation/providers'
import { makeStore } from '../factories/store/store'

const store = makeStore()

const Router: React.FC = () => {
  return (
    <ContainerProvider container={container}>
      <Suspense fallback={<FullPageLoading />}>
        <Provider store={store}>
          <ThemeProvider>
            <BrowserRouter>
              <AuthGate />
              <CssBaseline />
              <Switch>{makeLayouts()}</Switch>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </Suspense>
    </ContainerProvider>
  )
}

export default Router

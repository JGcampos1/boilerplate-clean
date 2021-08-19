import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Router from './router/router'

import '~/app/main/config/i18next-setup'

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
)

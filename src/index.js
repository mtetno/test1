import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'
import routes from './routes/routes'
import './index.css'
import * as serviceWorker from './utils/serviceWorker'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

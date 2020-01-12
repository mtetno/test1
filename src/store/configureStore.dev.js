import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga'
import sagaMonitor from '@redux-saga/simple-saga-monitor'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const enhancers = []

  let composeEnhancers = compose
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware), ...enhancers)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  // store.runSaga = sagaMiddleware.run
  sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)
  return store
}

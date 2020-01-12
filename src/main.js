import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import './styles/main.scss';
import actions from './routes/Signin/modules/actions';

// Store Initialization
// ------------------------------------
const
  store = createStore(window.__INITIAL_STATE__),
  hpsSignIn = JSON.parse(sessionStorage.getItem('hpsSignIn')),
  hpsSignInUser = JSON.parse(sessionStorage.getItem('hpsSignInUser')),
  directSignIn = (hpsSignIn) => {
    store.dispatch(
      actions.signinEnd(hpsSignIn)
    );
    store.dispatch(
      actions.getUserDetailsEnd(hpsSignInUser)
    );
  },

// Render Setup
// ------------------------------------
  MOUNT_NODE = document.getElementById('root');

let render = () => {
  const
    App = require('./components/App').default,
    routes = require('./routes/index').default(store);

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  );
};

if (hpsSignIn) {
  directSignIn(hpsSignIn);
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const
      renderApp = render,
      renderError = (error) => {
        const RedBox = require('redbox-react').default;

        ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
      };

    render = () => {
      try {
        renderApp();
      } catch (e) {
        console.error(e);
        renderError(e);
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();

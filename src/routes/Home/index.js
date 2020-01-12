import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

const getChildRoutes = (store) => [{
  path: 'question',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      /* eslint-disable one-var */
      const Container = require('./containers/HomeContainer').default;
      const reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'home', reducer });

      cb(null, Container);
      /* eslint-enable one-var */
    }, 'home');
  },
}];

export default (store) => (
  {
    path: 'home',
    childRoutes: getChildRoutes(store),
    onEnter: (nextState) => {
      if (nextState.location.pathname === '/home') {
        browserHistory.push('/home/question');
      }
    },
  }
);

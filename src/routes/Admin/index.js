import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

const getChildRoutes = (store) => [{
  path: 'question',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      /* eslint-disable one-var */
      const Container = require('./containers/AdminContainer').default;
      const reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'admin', reducer });

      const home = require('../Home/modules/reducer').default;

      injectReducer(store, { key: 'home', reducer: home });

      cb(null, Container);
      /* eslint-enable one-var */
    }, 'admin');
  },
}];

export default (store) => (
  {
    path: 'admin',
    childRoutes: getChildRoutes(store),
    onEnter: (nextState) => {
      if (nextState.location.pathname === '/admin') {
        browserHistory.push('/admin/question');
      }
    },
  }
);

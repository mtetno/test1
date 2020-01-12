import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

export default (store) => (
  {
    path: 'dashboard',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/DashboardContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'dashboard', reducer });

        cb(null, Container);
      }, 'dashboard');
    },
  }
);

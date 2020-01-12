import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

export default (store) => (
  {
    path: 'faq',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/FAQContentsContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'faq', reducer });

        cb(null, Container);
      }, 'faq');
    },
  }
);

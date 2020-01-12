import { injectReducer } from '../../store/reducers';

export default (store) => (
  {
    path: 'reset',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/ResetContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'reset', reducer });

        cb(null, Container);
      }, 'reset');
    },
  }
);

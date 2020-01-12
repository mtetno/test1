import { injectReducer } from '../../store/reducers';

export default (store) => (
  {
    path: 'forget',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/ForgetContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'forget', reducer });

        cb(null, Container);
      }, 'forget');
    },
  }
);

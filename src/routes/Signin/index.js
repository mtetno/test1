import { injectReducer } from '../../store/reducers';

export default (store) => (
  {
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/SigninContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'signin', reducer });

        cb(null, Container);
      }, 'signin');
    },
  }
);

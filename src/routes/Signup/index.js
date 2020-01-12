import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'signup',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/SignupContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'signup', reducer });

      cb(null, Container);
    }, 'signup');
  },
});

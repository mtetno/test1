import { injectReducer } from '../../store/reducers';

export default (store) => (
  {
    path: 'seekhelp',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/SeekHelpContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'seekhelp', reducer });

        cb(null, Container);
      }, 'seekhelp');
    },
  }
);

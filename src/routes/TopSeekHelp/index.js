import { injectReducer } from '../../store/reducers';

export default (store) => (
  {
    path: 'topseekhelp',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/SeekHelpContainer').default,
          reducer = require('./modules/reducer').default;

        injectReducer(store, { key: 'topseekhelp', reducer });

        cb(null, Container);
      }, 'topseekhelp');
    },
  }
);

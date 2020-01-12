import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

const getChildRoutes = (store) => [{
  path: 'start',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/QuestionaireContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'questionaire', reducer });

      cb(null, Container);
    }, 'questionaire');
  },
},{
  path: 'survey',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/QuestionaireWizardContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'questionaire', reducer });

      cb(null, Container);
    }, 'questionaire');
  },
}];

export default (store) => (
  {
    path: 'questionaire',
    childRoutes: getChildRoutes(store),
    onEnter: (nextState) => {
      if (nextState.location.pathname === '/questionaire') {
        browserHistory.push('/questionaire/start');
      }
    },
  }
);


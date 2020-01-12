import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

const getChildRoutes = (store) => [{
  path: 'familymembers',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/FamilyMembersContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'familymembers', reducer });

      cb(null, Container);
    }, 'familymembers');
  },
},
{
  path: 'addmembers',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/AddFamilyContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'addmembers', reducer });

      cb(null, Container);
    }, 'addmembers');
  },
},
{
  path: 'userinfo',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/UserInfoContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'userinfo', reducer });

      cb(null, Container);
    }, 'userinfo');
  },
}];

export default (store) => (
  {
    path: 'myfamily',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/MyfamilyContainer').default,
          reducer = require('./modules/reducer').default;
  
        injectReducer(store, { key: 'myfamily', reducer });
  
        cb(null, Container);
      }, 'myfamily');
    },
    childRoutes: getChildRoutes(store),
    onEnter: (nextState) => {
      if (nextState.location.pathname === '/myfamily') {
        browserHistory.push('/myfamily/familymembers');
      }
    },
  }
);

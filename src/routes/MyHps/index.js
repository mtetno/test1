import { injectReducer } from '../../store/reducers';
import { browserHistory } from 'react-router';

const getChildRoutes = (store) => [{
  path: 'mypheno',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/MyPhenotypeContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'mypheno', reducer });

      cb(null, Container);
    }, 'mypheno');
  },
},
{
  path: 'graphs',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/MyGraphsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'graphs', reducer });

      cb(null, Container);
    }, 'graphs');
  },
},
{
  path: 'mycharacteristics',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/MyCharacteristictsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'mycharacteristics', reducer });

      cb(null, Container);
    }, 'mycharacteristics');
  },
},
{
  path: 'dosndonts',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/DosDontsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'dosndonts', reducer });

      cb(null, Container);
    }, 'dosndonts');
  },
},
{
  path: 'articles',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/ArticlesForMeContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'articles', reducer });

      cb(null, Container);
    }, 'articles');
  },
},
{
  path: 'articleDetails/:articleId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/ArticleDetailsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'articleDetails', reducer });

      cb(null, Container);
    }, 'articleDetails');
  },
},
{
  path: 'recommendations',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/HpsRecommendationsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'recommendations', reducer });

      cb(null, Container);
    }, 'recommendations');
  },
},
{
  path: 'records',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/MyMedicalRecordsContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'records', reducer });

      cb(null, Container);
    }, 'records');
  },
},{
  path: 'recommendation_details/:recommendationId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const
        Container = require('./containers/RecommendationsDetailContainer').default,
        reducer = require('./modules/reducer').default;

      injectReducer(store, { key: 'recommendation_details', reducer });

      cb(null, Container);
    }, 'recommendation_details');
  },
}];

export default (store) => (
  {
    path: 'myhps',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        const
          Container = require('./containers/MyhpsContainer').default,
          reducer = require('./modules/reducer').default;
  
        injectReducer(store, { key: 'myhps', reducer });
  
        cb(null, Container);
      }, 'myhps');
    },
    childRoutes: getChildRoutes(store),
    onEnter: (nextState) => {
      if (nextState.location.pathname === '/myhps') {
        browserHistory.push('/myhps/mypheno');
      }
    },
  }
);

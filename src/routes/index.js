// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';
import homeRoute from './Home';
import adminRoute from './Admin';
import signinRoute from './Signin';
import signupRoute from './Signup';
import forgetRoute from './Forget';
import resetRoute from './Reset';
import dashboardRoute from './Dashboard';
import myhpsRoute from './MyHps';
import myfamilyRoute from './MyFamily';
import seekhelpRoute from './SeekHelp';
import topseekhelpRoute from './TopSeekHelp';
import questionaire from './Questionaire';
import faqRoute from './FAQ';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([{
  path: '/',
  indexRoute: signinRoute(store),
  childRoutes: [
    signupRoute(store),
    forgetRoute(store),
    resetRoute(store),
    adminRoute(store),
    homeRoute(store),
  ],
}, {
  path: '/',
  component: AuthLayout,
  childRoutes: [
    dashboardRoute(store),
    myhpsRoute(store),
    myfamilyRoute(store),
    seekhelpRoute(store),
    topseekhelpRoute(store),
    faqRoute(store),
  ],
}, {
  path: '/',
  component: BasicLayout,
  childRoutes: [
    questionaire(store),
  ],
}]);

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;

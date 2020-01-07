import React from 'react'
import {renderRoutes} from 'react-router-config'
import {Redirect} from 'react-router-dom'
import Login from '../components/Login/Container/Login'
import Dashboard from '../components/Dashboard/Container/Dashboard'

const Root = ({route}) => <div>{renderRoutes(route.routes)}</div>

const isUserLogedIn = () => {
  return true
}

const authenticateUser = (component) => {
  return isUserLogedIn() ? component : () => <Redirect to="/" />
}

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
      {
        path: '/dashboard/:id/:email/:role',
        component: authenticateUser(Dashboard),
      },
    ],
  },
]

export default routes

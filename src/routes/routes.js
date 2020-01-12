import React from 'react'
import {renderRoutes} from 'react-router-config'
import {Redirect,Route} from 'react-router-dom'
import Login from '../components/Login/Container/Login'
import Dashboard from '../components/Dashboard/Container/Dashboard'
import AddInventory from '../components/AddInventory/Container/AddInventory'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
const Root = ({route}) => <div>{renderRoutes(route.routes)}</div>
 

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
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/addInventory',
        component: AddInventory
      }
]}]


export default routes

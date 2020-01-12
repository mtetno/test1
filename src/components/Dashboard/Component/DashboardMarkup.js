import React from 'react'
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout'
import BasicLayout from '../../../layouts/BasicLayout/BasicLayout'

import VisitorDashboard from './VisitorDashboard'
import AppContext from '../../AppContext'

function DashboardMarkup() {
  return (
    <AppContext.Consumer>
      {({role}) => (
        <div>
          <AuthLayout
            role={role}
            perform="dashboard-page:visit"
            yes={BasicLayout}
            no={VisitorDashboard}
          />
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default DashboardMarkup

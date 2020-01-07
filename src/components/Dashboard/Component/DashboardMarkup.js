import React from 'react'
import ValidateUserAccess from '../../../routes/ValidateUserAccess'
import AdminDashboard from './AdminDashboard'
import VisitorDashboard from './VisitorDashboard'

import AppContext from '../../AppContext'

function DashboardMarkup() {
  return (
    <AppContext.Consumer>
      {({role}) => (
        <div>
          <ValidateUserAccess
            role={role}
            perform="dashboard-page:visit"
            yes={AdminDashboard}
            no={VisitorDashboard}
          />
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default DashboardMarkup

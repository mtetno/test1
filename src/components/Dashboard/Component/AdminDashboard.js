import React from 'react'
import InventoryListMarkup from '../../InventoryList/Component/InventoryListMarkup'
import ProfileMarkup from '../../Profile/Component/ProfileMarkup'
import AdminDashboardNavbarMarkup from './AdminDashboardNavbarMarkup'
import AppContext from '../../AppContext'

const renderSelectedComponent = (selectedNav) => {
  let selectedComponent = <ProfileMarkup />
  switch (selectedNav) {
    case 'profile':
      selectedComponent = <ProfileMarkup />
      break
    case 'inventory':
      selectedComponent = <InventoryListMarkup />
      break
    default:
      selectedComponent = <ProfileMarkup />
  }
  return selectedComponent
}

const AdminDashboard = () => (
  <AppContext.Consumer>
    {({selectedNav}) => (
      <div>
        <AdminDashboardNavbarMarkup />
        {renderSelectedComponent(selectedNav)}
      </div>
    )}
  </AppContext.Consumer>
)

export default AdminDashboard

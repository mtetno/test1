import React from 'react'
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core'
import {Example} from '@blueprintjs/docs-theme'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import AppContext from '../../AppContext'

const AdminDashboardNavbarMarkup = () => {
  return (
    <AppContext.Consumer>
      {({onLogout, onSelectedNav}) => (
        <Example>
          <Navbar>
            <NavbarGroup align={Alignment.RIGHT}>
              <NavbarHeading>ReactBootApp</NavbarHeading>
              <NavbarDivider />
              <Button
                className={Classes.MINIMAL}
                icon="shopping-cart"
                text="Inventory"
                onClick={() => onSelectedNav('inventory')}
              />
              <Button
                className={Classes.MINIMAL}
                icon="user"
                text="Profile"
                onClick={() => onSelectedNav('profile')}
              />
              <Button
                className={Classes.MINIMAL}
                icon="log-out"
                text="Logout"
                onClick={onLogout}
              />
            </NavbarGroup>
          </Navbar>
        </Example>
      )}
    </AppContext.Consumer>
  )
}

export default AdminDashboardNavbarMarkup

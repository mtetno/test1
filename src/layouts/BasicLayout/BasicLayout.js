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
import InventoryListMarkup from '../../components/InventoryList/Component/InventoryListMarkup'
import ProfileMarkup from '../../components/Profile/Component/ProfileMarkup'
import {Example} from '@blueprintjs/docs-theme'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import BottomLayout from '../BottomLayout/BottomLayout'

const renderSelectedComponent = (selectedNav) => {
  let selectedComponent = undefined
  switch (selectedNav) {
    case 'profile':
      selectedComponent = <ProfileMarkup />
      break
    case 'inventory':
      selectedComponent = <InventoryListMarkup />
      break
    default:
      selectedComponent = undefined
  }
  return selectedComponent
}


class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      role: undefined,
      email: undefined,
      id: undefined,
      selectedNav: undefined,
    }
    autoBind(this)
  }

  componentDidMount() {
    /* eslint-disable */
    const {role, id, email} = this.props.appState.user
    console.log(this.props.appState)
    this.setState({
      role,
      id,
      email,
    })
  }

  onSelectedNav(navItem) {
    this.setState({selectedNav: navItem})
  }

  onLogout() {
    this.props.history.push('/')
    // TODO : write logout saga here
  }

  render() {
    const {role, id, email, selectedNav} = this.state;
    console.log("Child routes ");
    console.log(this.props);  
    return (
      <div>
        <Example>
          <Navbar>
            <NavbarGroup align={Alignment.RIGHT}>
              <NavbarHeading>ReactBootApp</NavbarHeading>
              <NavbarDivider />
              <Button
                className={Classes.MINIMAL}
                icon="shopping-cart"
                text="Inventory"
                onClick={() => this.onSelectedNav('inventory')}
              />
              <Button
                className={Classes.MINIMAL}
                icon="user"
                text="Profile"
                onClick={() => this.onSelectedNav('profile')}
              />
              <Button
                className={Classes.MINIMAL}
                icon="log-out"
                text="Logout"
                onClick={this.onLogout}
              />
            </NavbarGroup>
          </Navbar>
        </Example>
        {this.props.children}
        {renderSelectedComponent(selectedNav)}
        <BottomLayout />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  appState: {
    user: state.user ? state.user : {},
  },
})

export default connect(mapStateToProps, undefined)(BasicLayout)

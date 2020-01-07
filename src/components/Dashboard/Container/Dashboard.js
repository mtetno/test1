import React from 'react'
import autoBind from 'react-autobind'
import DashboardMarkup from '../Component/DashboardMarkup'
import AppContext from '../../AppContext'

class Dashboard extends React.Component {
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
    const {role, id, email} = this.props.match.params
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
  }

  render() {
    const {role, id, email, selectedNav} = this.state
    return (
      <AppContext.Provider
        value={{
          role,
          id,
          email,
          selectedNav,
          onSelectedNav: this.onSelectedNav,
          onLogout: this.onLogout,
        }}
      >
        {role ? <DashboardMarkup /> : undefined}
      </AppContext.Provider>
    )
  }
}

export default Dashboard

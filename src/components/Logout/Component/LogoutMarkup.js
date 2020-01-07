import React from 'react'
import {Button} from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import AppContext from '../../AppContext'

const LogoutMarkup = () => (
  <AppContext.Consumer>
    {() => <Button icon="logout" intent="danger" text="Logout" />}
  </AppContext.Consumer>
)

export default LogoutMarkup

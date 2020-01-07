import React from 'react'
import {IconNames} from '@blueprintjs/icons'
import {Button, Card, Elevation, FormGroup, InputGroup} from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import './LoginMarkup.css'
import AppContext from '../../AppContext'

function LoginMarkup() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className="app">
          <Card interactive elevation={Elevation.TWO}>
            <h2>Login</h2>
            <FormGroup
              label="Email"
              labelFor="text-input"
              helperText={context.validateEmail()}
            >
              <InputGroup
                id="text-input"
                leftIcon={IconNames.USER}
                placeholder="Email"
                value={context.email}
                onChange={context.emailChange}
              />
            </FormGroup>
            <FormGroup
              label="Password"
              labelFor="text-input"
              helperText={context.validatePassword()}
            >
              <InputGroup
                id="text-input"
                type="password"
                leftIcon={IconNames.LOCK}
                placeholder="Password"
                value={context.password}
                onChange={context.passwordChange}
              />
            </FormGroup>
            <Button className="bp3-intent-primary" onClick={context.onLogin}>
              Login
            </Button>
          </Card>
        </div>
      )}
    </AppContext.Consumer>
  )
}

export default LoginMarkup

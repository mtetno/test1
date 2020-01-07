import React from 'react'
import {Card, H4, H6} from '@blueprintjs/core'
import {Example} from '@blueprintjs/docs-theme'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import AppContext from '../../AppContext'
import './ProfileMarkup.css'

const ProfileMarkup = () => (
  <AppContext.Consumer>
    {({email, role}) => (
      <Example class="header-margin">
        <Card Elevation>
          <H4>User Profile</H4>
          <H6>Email : {email}</H6>
          <H6>Role : {role}</H6>
        </Card>
      </Example>
    )}
  </AppContext.Consumer>
)

export default ProfileMarkup

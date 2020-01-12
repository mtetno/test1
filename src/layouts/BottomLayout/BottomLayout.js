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
import AppContext from '../../components/AppContext'
import './BottomLayout.scss'

const BottomLayout = () => {
  return (<Example className="footer">
          <Navbar>
            <NavbarGroup align={Alignment.RIGHT}>
              <Button className={Classes.MINIMAL}>
                <a
                  target="_blank"
                  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                >
                  Policies
                </a>
              </Button>
              <Button className={Classes.MINIMAL}>
                <a
                  target="_blank"
                  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                >
                  Contact us
                </a>
              </Button>
              <Button className={Classes.MINIMAL}>
                <a
                  target="_blank"
                  href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"
                >
                  Locate us
                </a>
              </Button>
            </NavbarGroup>
          </Navbar>
        </Example>
  )
}

export default BottomLayout

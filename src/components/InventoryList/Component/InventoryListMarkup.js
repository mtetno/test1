import React from 'react'
import {Button, H4} from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import AppContext from '../../AppContext'
import ValidateUserAccess from '../../../routes/ValidateUserAccess'
import inventory from '../../../utils/Data/inventory'
import './InventoryListMarkup.css'

const InventoryListMarkup = () => (
  <AppContext.Consumer>
    {({role, id}) => (
      <div className="header-margin">
        <H4>Inventory List</H4>
        <table className="bp3-html-table .modifier">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>
                  <ValidateUserAccess
                    role={role}
                    perform="inventory:edit"
                    data={{
                      userId: id,
                      inventoryOwnerId: item.ownerId,
                    }}
                    yes={() => (
                      <Button icon="refresh" intent="success" text="Reset" />
                    )}
                  />
                  <ValidateUserAccess
                    role={role}
                    perform="inventory:delete"
                    yes={() => (
                      <Button
                        className="delete-left-margin"
                        icon="delete"
                        intent="danger"
                        text="Delete Item"
                      />
                    )}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </AppContext.Consumer>
)

export default InventoryListMarkup

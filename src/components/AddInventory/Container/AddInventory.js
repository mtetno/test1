import React from 'react'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import BasicLayout from '../../../layouts/BasicLayout/BasicLayout'
import Wizard from '../../../layouts/FormLayout/Wizard';

class AddInventory extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }


  render() {
    return <BasicLayout>
          <Wizard/> 
    </BasicLayout>
  }


}


export default AddInventory

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label,Row, Image, ButtonToolbar, FieldGroup,Form, Button, DropdownButton, MenuItem ,Glyphicon , Tab, Panel, div , h3,h4, span,ControlLabel, InputGroup,FormGroup,FormControl} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './AddFamilyMemberMarkup.scss';
import FormBuilder from '../../../../components/shared/FormBuilder';


var header = (
		<div>
			<Row>
			<Col md={6}>
        <h4>Add Family Member</h4>
      </Col>      
      </Row>

    </div>
  );
const AddFamilyMember = ({
data,
handleAddMemberSubmit,
handleInput,
appState,
formData
}) => {
  return (
    <Col className='center-content-exercise add-familymem'>
      		<Panel  header={header} bsStyle="default">
            <Col md={12} className='myfamilyform'>
              <Col md={6}>
                <h4>Personal Details</h4>
              </Col>
              <Col md={6}>
                <h4>Contact Details</h4>
              </Col>
              <Form >
        		    <Col md={6}>
													<FormBuilder
													formData={[formData[0]]}
													updateValue={handleInput}
													formType={'input'}
													/>
													<FormBuilder
													formData={[formData[1]]}
													updateValue={handleInput}
													formType={'input'}
													/>
													<FormBuilder
													formData={[formData[2]]}
													updateValue={handleInput}
													formType={'input'}
													/>
													<FormBuilder
													formData={[formData[3]]}
													updateValue={handleInput}
													formType={'input'}
													/>
        		    </Col>
                <Col md={6}>
								<FormBuilder
								formData={[formData[4]]}
								updateValue={handleInput}
								formType={'input'}
								/>
								<FormBuilder
								formData={[formData[5]]}
								updateValue={handleInput}
								formType={'input'}
								/>
                  <Col md={12} className='pull-right text-right nopadding btn-section'>
                    <Button type="submit" className='cancel'>Cancel</Button>
                    <Button type="submit"  onClick={handleAddMemberSubmit} className='save'>Save and Continue</Button>
                  </Col>
                </Col>
              </Form>
            </Col>
  			</Panel>
    </Col>
  );
};

AddFamilyMember.propTypes = {
  data: PropTypes.object,
	  appState: PropTypes.object,
		  handleAddMemberSubmit: PropTypes.func,
			handleInput: PropTypes.func,
};

export default AddFamilyMember;

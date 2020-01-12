import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col, Glyphicon } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';

const ResetMarkup = ({
appState,
formData,
updateValue,
social,
signin,
}) => {
  return (
    <Grid id='ResetMarkup' className='signin-container'>
      <Col md={12}><h1>Signin</h1></Col>
      <Col md={12}>
        <FormBuilder
          formData={formData}
          updateValue={updateValue}
          formType={'input'}
          />
        <Button onClick={signin} bsSize='large' bsStyle='success'><Glyphicon glyph='lock' /> Reset</Button>
      </Col>
    </Grid>
  );
};

ResetMarkup.propTypes = {
  appState: PropTypes.object,
  formData: PropTypes.array,
  updateValue: PropTypes.func,
  social: PropTypes.func,
  signin: PropTypes.func,
};

export default ResetMarkup;

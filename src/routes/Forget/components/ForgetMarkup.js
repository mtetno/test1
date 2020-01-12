import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col, Glyphicon } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import OverlayLoader from '../../../components/shared/OverlayLoader';

const ForgetMarkup = ({
appState,
formData,
updateValue,
forget,
}) => {
  return (
    <Grid id='ForgetMarkup' className='signin-container'>
      <Col md={12}><h1>Forget Password</h1></Col>
      <Col md={12}>
        <FormBuilder
          formData={formData}
          updateValue={updateValue}
          formType={'input'}
          />
        <Button onClick={forget} bsSize='large' bsStyle='success'><Glyphicon glyph='lock' /> Send</Button>
      </Col>
      { appState.fetch ? <OverlayLoader /> : null }
    </Grid>
  );
};

ForgetMarkup.propTypes = {
  appState: PropTypes.object,
  formData: PropTypes.array,
  updateValue: PropTypes.func,
  forget: PropTypes.func,
};

export default ForgetMarkup;

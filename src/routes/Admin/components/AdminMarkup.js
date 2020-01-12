import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Col } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
// import {Formio} from 'react-formio';

const AdminMarkup = ({
appState,
createPage,
updateValue,
addField,
editPage,
addPage,
formData,
formTypeDate,
formType,
page,
pageNumber,
onSuggestionsClearRequested,
onSuggestionsFetchRequested,
updateAutosuggestValue,
formChange,
}) => {
  const pageViewer = appState.home.pages.map((page, pageIndex) => {
    const className = pageNumber === pageIndex ? 'well margin-trb-20 text-center page-card active' : 'well margin-trb-20 text-center page-card';
    return (
      <Col key={pageIndex} md={2} onClick={(e) => editPage(e, pageIndex)} className={className}>{page.title}</Col>
    );
  });
  return (
    <Grid id='AdminMarkup'>
      <Col md={12}><h1>Admin section</h1></Col>
      <Col md={12}>
        {pageViewer}
        { pageNumber !== null ? <Col md={2} onClick={addPage} className='well margin-trb-20 text-center page-card'>Add Page</Col> : null }
      </Col>
      <Col md={12}><FormBuilder formData={formData} updateValue={updateValue} formType={'input'} /></Col>
      <Col md={12}>
        <FormBuilder
          formData={formTypeDate}
          updateValue={updateValue}
          formType={formType}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          updateAutosuggestValue={updateAutosuggestValue}
          />
      </Col>
      { formTypeDate.length ? <Col md={12}><Button bsStyle='info' onClick={addField}>Add Field</Button></Col> : null }
      { page && page.questions.length
        ? <Col md={12} className='well margin-tb-20'>
          <h2>{page.title}</h2>
          <FormBuilder formData={page.questions} checkDependent />
          <Button className='pull-right' bsStyle='success' onClick={createPage}>{ pageNumber !== null ? 'Update Page' : 'Create Page' }</Button>
        </Col>
        : null }
    </Grid>
  );
};

AdminMarkup.propTypes = {
  appState: PropTypes.object,
  createPage: PropTypes.func,
  updateValue: PropTypes.func,
  addField: PropTypes.func,
  editPage: PropTypes.func,
  addPage: PropTypes.func,
  formData: PropTypes.array,
  formTypeDate: PropTypes.array,
  formType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  page: PropTypes.object,
  pageNumber: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  onSuggestionsClearRequested: PropTypes.func,
  onSuggestionsFetchRequested: PropTypes.func,
  updateAutosuggestValue: PropTypes.func,
  formChange: PropTypes.func,
};

export default AdminMarkup;

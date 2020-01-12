import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Pager } from 'react-bootstrap';
import FormBuilder from '../../../components/shared/FormBuilder';
import _ from 'lodash';

const HomeMarkup = ({
    formData,
    pageNumber,
    previousClick,
    nextClick,
    updateValue,
}) => {
  const pagerInstance = (
    <Pager>
      <Pager.Item disabled={pageNumber === 1} previous onClick={previousClick}>&larr; Previous Page</Pager.Item>
      <Pager.Item disabled={pageNumber >= formData.length} next onClick={nextClick}>Next Page &rarr;</Pager.Item>
    </Pager>
  ),
    page = formData.length ? formData[pageNumber - 1] : null;
  if (page) {
    page.questions = _.sortBy(page.questions, 'order');
  }
  return (
    <Grid id='HomeMarkup'>
      {pagerInstance}
      { page ? <Col className='well margin-tb-20'>
        <h2>{page.title}</h2>
        <FormBuilder formData={page.questions} fullDate={formData} updateValue={updateValue} formType={pageNumber - 1} />
      </Col> : null }
    </Grid>
  );
};

HomeMarkup.propTypes = {
  formData: PropTypes.array,
  pageNumber: PropTypes.number,
  previousClick: PropTypes.func,
  nextClick: PropTypes.func,
  updateValue: PropTypes.func,
};

export default HomeMarkup;

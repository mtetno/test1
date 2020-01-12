import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row, DropdownButton, MenuItem, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import exerciseSpotMarching from '../../../../styles/img/exercise-spot-marching.png';
import DatePicker from 'react-bootstrap-date-picker';
import createReactClass from 'create-react-class';
const ReactHighcharts = require('react-highcharts');

const config = {
  xAxis: {
    categories: ['Number of dieseases','Number of dieseases','Number of dieseases','Number of dieseases'],
    labels: {
        autoRotation: [-90],
        style: {
            color: 'gray',
         fontSize : '14px',
         fontWeight:'800px'
        }
    }
  },
  series: [{
    data: [-10,-20,-30,-40,-50,-60,10,20,30,40,50,60],
  },
  {
    data: [10,20,30,10,50,60],
  }
],

  yAxis: {
    gridLineDashStyle: 'longdash'
}
};
  
const CustomControl = createReactClass({
  displayName: 'CustomControl',
  
  render () {
    const {
        value,
        placeholder,
        ...rest
      } = this.props;
  
    return <li className='li_1'> <Button {...rest}>{<span>Customize<FontAwesome name='calendar' className='pull-right align-middle' /></span>}</Button> </li>;
  },
});
  
const Graphs = ({
data,
handleDropdownSelect,
activeDropdown,
}) => {
  return (
    <Col className='center-content-progress'>
      <Col md={4} xs={12} sm={12} className='date-text text-left'>SEPTEMBER 2017</Col>
      <Col md={4} xs={12} sm={12} className='max-points-container text-center'>
        <Col md={8} className='text-center text1' >Max. points available for Today</Col>
        <Col md={4} className='text-center points'>100</Col>
      </Col>
      <Col md={4} xs={12} sm={12} className='text-right'>
        <DropdownButton open={activeDropdown} onClick={handleDropdownSelect} title='Start Tomorrow' className='schedule' pullRight id='bg-justified-dropdown'>
          <MenuItem onClick={handleDropdownSelect} eventKey='1' ><span>Start Tomorrow<FontAwesome name='clock-o' className='pull-right align-middle' /></span></MenuItem>
          <MenuItem eventKey='2' className='calender_btn'><span><DatePicker customControl={<CustomControl />} /></span></MenuItem>
        </DropdownButton>
      </Col>
      <Col md={12} className='trendChart1 pull-left'>
        <ReactHighcharts config={config} />
      </Col>
        
    </Col>
  );
};

Graphs.propTypes = {
  data: PropTypes.object,
};

export default Graphs;

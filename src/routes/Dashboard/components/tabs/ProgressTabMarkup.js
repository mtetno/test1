import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row, DropdownButton, MenuItem, FormGroup, ControlLabel, Button, Dropdown } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import exerciseSpotMarching from '../../../../styles/img/exercise-spot-marching.png';
import DatePicker from 'react-bootstrap-date-picker';
import createReactClass from 'create-react-class';
const ReactHighcharts = require('react-highcharts');
import { DateRange } from 'react-date-range';

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
const handleSelect=(range,changeSchedules)=>{

}
function getDates(startDate, stopDate,changeSchedules) {
  var dateArray = new Array();
  
  var currentDate = startDate;
  while (currentDate <= stopDate) {
      dateArray.push((new Date (currentDate)).addDays(1).toISOString().slice(0,10).split('-').reverse().join('-'));
      currentDate = currentDate.addDays(1);
  }

     return dateArray;
}
  
const ProgressTabMarkup = ({
data,
maxPoints,
handleDropdownSelect,
activeDropdown,
progressPoints,
changeSchedules
}) => {
  const handlechange=(event)=>{
    handleSelect(event);
  }
  const config = {
    chart: {
      spacingTop: 21,
      spacingRight: 10,
      height:300
   },
    xAxis: {
      title: {
        text: 'Date'
      },
      categories:progressPoints?progressPoints.progress.map((data)=>data.activityDate.split("-")[0]):[0],

    },
    series: [{
      data: progressPoints?progressPoints.progress.map((data)=>data.points):[0],
    }],
    yAxis: {
      title: {
        text: 'Points'
      }
    },
  };
 const CustomControl = createReactClass({
    displayName: 'CustomControl',
    
    render () {
      const {
          value,
          placeholder,
          ...rest
        } = this.props;
    
      return <li className='li_1'> <Button {...rest}>{<span>From</span>}</Button> </li>;
    },
  });
  const CustomControl2 = createReactClass({
    displayName: 'CustomControl',
    
    render () {
      const {
          value,
          placeholder,
          ...rest
        } = this.props;
    
      return <li className='li_1'> <Button {...rest}>{<span>To</span>}</Button> </li>;
    },
  });
var dateArray1=[];
  
  return (
    <Col className='center-content-progress'>
      <Col md={4} xs={12} sm={12} className='date-text text-left'>SEPTEMBER 2017</Col>
      <Col md={4} xs={12} sm={12} className='max-points-container text-center'>
        <Col md={8} className='text-center text1' >Max. points available for Today</Col>
        <Col md={4} className='text-center points'>{maxPoints && maxPoints.maxPoints}</Col>
      </Col>
      <Col md={4} xs={12} sm={12} className='text-right'>
        <DropdownButton id='start_tomorrow' defaultOpen={activeDropdown} onClick={handleDropdownSelect} title="Start Tomorrow" className='schedule' pullRight id='bg-justified-dropdown'>
          <MenuItem onClick={()=>{handleDropdownSelect();changeSchedules([new Date().toISOString().slice(0,10).split('-').reverse().join('-')])}} eventKey='1' ><span>Start Tomorrow<FontAwesome name='clock-o' className='pull-right align-middle' /></span></MenuItem>
          <MenuItem onClick={handleDropdownSelect} eventKey='1' ><span>Customize<FontAwesome name='calendar' className='pull-right align-middle' /></span></MenuItem>
          <DropdownButton id='date_picker' className='btn-drop' title=''>
              <DateRange calendars={1}
					onChange={(event)=>{
            
            const handleSelect=((range)=>{
              getDates(range.startDate.toDate(),range.endDate.toDate());
            })(event);
            Date.prototype.addDays = function(days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            }
           getDates=(startDate, stopDate)=> {
              var dateArray = new Array();
              
              var currentDate = startDate;
              while (currentDate <= stopDate) {
                  dateArray.push((new Date (currentDate)).addDays(1).toISOString().slice(0,10).split('-').reverse().join('-'));
                  currentDate = currentDate.addDays(1);
              }
              dateArray1=dateArray;
            }

          }}/>
         <Col className='text-center bottom-cal'> <button onClick={()=>changeSchedules(dateArray1)} className="btn btn-md btn-success btn-calender">SKIP SELECTED DATES</button></Col>
          </DropdownButton>
        </DropdownButton>
      </Col>
      <Col md={12} className='trendChart pull-left'>
        <ReactHighcharts config={config} />
      </Col>
      
        
    </Col>
  );
};

ProgressTabMarkup.propTypes = {
  data: PropTypes.object,
};

export default ProgressTabMarkup;

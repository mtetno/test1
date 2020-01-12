import React from 'react';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image,Row } from 'react-bootstrap';
import '../MyGraphsMarkup.scss';
const ReactHighcharts = require('react-highcharts');

const config = {
    chart: {
        
        spacingTop: 21,
        spacingLeft: 15,
        spacingRight: 10,
        shadow: {
             color: '#000',
             width: 1,
             offsetX: 0,
             offsetY: 0
         },
         height:500
     },
    xAxis: {
      categories: ['Number of diseases','Number of discomforts','Intensity','Frequency','Duration','Loss of man hours stop activity','Loss of man hours take leave','Loss of man hours got hospitalized'],
      labels: {
          rotation: [-90],
          style: {
              color: 'gray',
           fontSize : '14px',
           fontWeight:'800px',
           width:'50px',
       },
       
       
      }
    },
       title: {
        text: 'DISFUNCTION COMPARISON',
        align: 'left',
        x:21,
        style: {
            fontFace: 'OpenSans-SemiBold',
            fontSize: '16px',
            fontWeight: '600',
            color: '#183753'
        }
    },
    legend: {
        itemStyle: {
            color: '#183753',
            fontSize:'12px',
            fontWeight:'100',
            fontFace:'OpenSans',
        },
        
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
    },
    colors: [
        'rgb(230, 230, 230)',
        '#5590b8',
         'red',
     ],
     series: [{
        name:'AVERAGE(SAMPLE)',  
        data: [0,0,0,0,0,0,0,0],
      }, 
        {
         name:'BEST(SAMPLE)',  
         data: [-10,-20,-30,-40,-50,-60,10,20
        ],
       },{
        name:'USER1',  
        data: [10,20,30,10,50,60,-40,30],
      },
      
       
     ],

     plotOptions: {
        series: {
            marker: {
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: null,
                symbol:"circle", 
            }
        }
    },
     tooltip: {
        pointFormat: '<b>{point.x}</b><br/>Previous Position',
        valueSuffix: '%',
        shared: true
    },
     
       yAxis: {
         gridLineDashStyle: 'longdash',
         plotLines: [{
            color: 'rgb(230, 230, 230)', 
            dashStyle: 'solid', 
            value: 0, 
            width: 3   
          }]
     }
     };

const DysfunctionComparisonMarkup = ({
data,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
}) => {
  return (
    <Col md={12} className='trendChart'>
        <ReactHighcharts config={config} />
      </Col>
        
     );
};
DysfunctionComparisonMarkup.propTypes = {
    data: PropTypes.object,
    handleTabSelect: PropTypes.func,
    activeTab: PropTypes.number,
};

export default DysfunctionComparisonMarkup;
    
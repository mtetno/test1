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
      categories: ['Bed Time','Walking Time','Afternoon Sleep','Irregularity of Meal Timings','Frequency of Eating Out Side','Late Night','Addictions-Tobacco Chewing','Addictions-Smoking','Addiction-Alcohol'],
      labels: {
          rotation: [-90],
          style: {
              color: 'gray',
           fontSize : '14px',
           fontWeight:'800px',
           overflow:'false',
       }, 
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
    colors: [
        'rgb(230, 230, 230)',
        '#5590b8',
         'red',
     ],
     series: [{
        name:'AVERAGE(SAMPLE)',  
        data: [0,0,0,0,0,0,0,0,0],
      }, 
        {
         name:'BEST(SAMPLE)',  
         data: [-10,-20,-30,-40,-50,-60,10,20,30],
       },{
        name:'USER1',  
        data: [10,20,30,10,50,60,-90,40,-100],
      },
      
       
     ],
  title: {
    text: 'LIFE STYLE COMPARISON',
    align: 'left',
    x:21,
    style: {
        fontFace: 'OpenSans-SemiBold',
        fontSize: '16px',
        fontWeight: '600',
        color: '#183753'
    }
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

const LifeStyleComparisonMarkup = ({
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
LifeStyleComparisonMarkup.propTypes = {
    data: PropTypes.object,
    handleTabSelect: PropTypes.func,
    activeTab: PropTypes.number,
};

export default LifeStyleComparisonMarkup;
    
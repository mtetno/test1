import React from 'react';
import PropTypes from 'prop-types';
import { Col, Tabs, Tab, Image,Row } from 'react-bootstrap';
import '../MyGraphsMarkup.scss';
const ReactHighcharts = require('react-highcharts');

const config =  {
    chart: {
        type: 'bar',
        spacingBottom: 14,
        spacingTop: 21,
        spacingLeft: 15,
        spacingRight: 10,
        
   
        shadow: {
            color: '#000',
            width: 1,
            offsetX: 0,
            offsetY: 0
        }
    },
    title: {
        text: 'FITNESS REGIME ANALYSIS',
        align: 'left',
        x:21,
        style: {
            fontFace: 'OpenSans-SemiBold',
            fontSize: '16px',
            fontWeight: '600',
            color: '#183753'
        }
    },
    xAxis: {
        categories: ['ACUPRESSURE','HOME REMEDIES','YOGASAN','EXERCISE']
    },
    yAxis: {
        min: 0,
        title: {
            text:'DAYS',
            margin: 10,
            style: {
            
                fontSize:'12px',
                color: '#183753',
                fontFace:'OpenSans',

            }
        }
    },
    colors: [
        '#FFFFFF',
        '#2196f3',
        
    ],
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
            stacking: 'normal',
            borderColor: 'red',
            borderTopWidth:'30px',
        }
    },
    tooltip: {
        headerFormat: '{point.x:.1f}% <br/>Previous Position',
        pointFormat: '<br/>{point.x:.1f}% <br/>Current Position',
        shared: true
    },
    series: [{
        name: 'COMPLETED BY USER',
        data: [5, 3, 4, 7]
    }, {
        name: 'SUGGESTED PLAN',
        data: [2, 2, 3, 2]
    }, {
        name: 'SKIPPED SCHEDULE',
        data: [3, 4, 4, 2]
    }]
};

const FitnessRegimeAnalysisMarkup = ({
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

FitnessRegimeAnalysisMarkup.propTypes = {
    data: PropTypes.object,
    handleTabSelect: PropTypes.func,
    activeTab: PropTypes.number,
};

export default FitnessRegimeAnalysisMarkup;
    
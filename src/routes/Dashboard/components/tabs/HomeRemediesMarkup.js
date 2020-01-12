import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import FontAwesome from 'react-fontawesome';
import exerciseSpotMarching from '../../../../styles/img/homeRemedies/black_pepper2.jpg';
const HomeRemediesMarkup = ({
      appState,
      data,
      handleShowPlayerModal,
      dots,
      infinite,
      speed,
      slidesToShow,
      slidesToScroll,
}) => {
  const userHomeRemedies =appState?appState.userHomeRemedies:null;
  var settings = {
    slidesPerRow: 3,
    slidesToShow: 6,
    slidesToScroll:6,
    rows: 2,
    infinite: false,
    responsive: [
    {
      breakpoint: 478,
      settings: {
        slidesPerRow: 3,
        rows: 2,
        slidesToShow: 5   
      }
    }
    ]
  };
  return (
        <Col className='center-content-exercise fixed-center'> 
         <Slider {...settings}>
          {
             userHomeRemedies!=null?userHomeRemedies.map((data)=>
          <Col key={data.homeRemedy.id} md={4} className='exercise-wrap text-center' onClick={() => handleShowPlayerModal(data)}>
            <Image src={exerciseSpotMarching} responsive className='cursor-pointer' />
            <Col className='header'>
              <Col className='text'>{data.homeRemedy.name}</Col>
              { data.status ? <Col className='status-icon'><FontAwesome name='check-square' className='icon-18 turtle-green' /></Col> : null}
            </Col>
            <Col className={ data.status ? 'footer-wrap completed pull-left cursor-pointer' : 'footer-wrap pull-left cursor-pointer' }>
             <Col className='text-value-homeremedies'>
                <Col className='pull-left'>No. of days for<br/>consumption</Col>
                <Col className='pull-right'>{data.homeRemedy.duration}<span> Days</span></Col>
              </Col>
            </Col>
          </Col>
          ):<Col>No Schedules For Home Remedies</Col>
        }
        </Slider>
        </Col>
   );
}
export default HomeRemediesMarkup;

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Badge, Image } from 'react-bootstrap';
import './RightAsideMarkup.scss';
import exercise from '../../../styles/img/exercise-icon.gif';
import homeRemedies from '../../../styles/img/home-remedies-icon.gif';
import acupressure from '../../../styles/img/accupressure-icon.gif';
import dosanddonts from '../../../styles/img/dos-donts.jpg';

const ExerciseStatus=(userExerciseTrackings)=>{
let Excompleted=0,
  Exremaining=userExerciseTrackings.length;
  userExerciseTrackings.forEach((data)=>{
    if(data.status==1)
    {
      Excompleted++;
      Exremaining--;
    }
 })
 return ({Excompleted,Exremaining,Extotal:userExerciseTrackings.length});
}
const HomeStatus=(userHomeRemedies)=>{
  let Hmcompleted=0,
    Hmremaining=userHomeRemedies.length;
    userHomeRemedies.forEach((data)=>{
      if(data.status==1)
      {
        Hmcompleted++;
        Hmremaining--;
      }
   })
   return ({Hmcompleted,Hmremaining,Hmtotal:userHomeRemedies.length});
  }
const AccuStatus=(userAccupressure)=>{
  let Accompleted=0;
    userAccupressure.forEach((data)=>{
      let completed = true;
       data.subRegions.forEach((subregion)=>{
          subregion.acupressurePoints.forEach((point)=>{
           
            if(point.status==0)
            {
              completed = false;
            }
         }
        )
    })
    if(completed) {
      Accompleted++;
    }
  })
  return ({Accompleted:Accompleted, Acremaining: userAccupressure.length-Accompleted, Actotal: userAccupressure.length});
}
const RightAsideMarkup = ({
appState,
data,
handleModal,
}) => {
   
  const  {Excompleted,Exremaining,Extotal}=appState.recommendation&&appState.recommendation.userExerciseTrackings?ExerciseStatus(appState.recommendation.userExerciseTrackings):{Excompleted:0,Exremaining:0,Extotal:0};
  const  {Hmcompleted,Hmremaining,Hmtotal}=appState.recommendation&&appState.recommendation.userHomeRemedies?HomeStatus(appState.recommendation.userHomeRemedies):{Hmcompleted:0,Hmremaining:0,Hmtotal:0};
 const  {Accompleted,Acremaining,Actotal}=appState.recommendation&&appState.recommendation.userAcupressureRegions?AccuStatus(appState.recommendation.userAcupressureRegions):{Accompleted:0,Acremaining:0,Actotal:0};
  return (
    <Col className='right-aside'>
      <Col className='task-group'>
        <Col className='title-wrap'>
          <span className='title'>EXERCISE   </span>
          <Badge>{Exremaining}</Badge>
        </Col>
        <Col className='task-wrap'>
          <Image src={exercise}  responsive className="padl15" />
          <Col className='task-value text-blue'>{Excompleted}/{Extotal}</Col>
        </Col>
      </Col>
      <Col className='task-group'>
        <Col className='title-wrap'>
          <span className='title'>home remedies</span>
          <Badge>{Hmremaining}</Badge>
        </Col>
        <Col className='task-wrap'>
          <Image src={homeRemedies}   responsive className="padl15" />
          <Col className='task-value text-yellow'>{Hmcompleted}/{Hmtotal}</Col>
        </Col>
      </Col>
      <Col className='task-group'>
        <Col className='title-wrap'>
          <span className='title'>acupressure</span>
          <Badge>{Acremaining}</Badge>
        </Col>
        <Col className='task-wrap'>
          <Image src={acupressure}  responsive className="padl15"/>
          <Col className='task-value text-red'>{Accompleted}/{Actotal}</Col>
        </Col>
      </Col>
      <Col className='dosanddonts text-center cursor-pointer' onClick={(e) => handleModal(e, true)}>
        <Image src={dosanddonts} responsive style={{width:'100%'}}  />
        <Col className='title'></Col>
        <Col className='info'>Do’s & don'ts</Col>
      </Col>
    </Col>
  );
};

RightAsideMarkup.propTypes = {
  data: PropTypes.object,
};

export default RightAsideMarkup;

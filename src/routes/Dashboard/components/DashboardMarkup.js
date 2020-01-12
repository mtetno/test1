import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col } from 'react-bootstrap';
import LeftAsideMarkup from './LeftAsideMarkup';
import RightAsideMarkup from './RightAsideMarkup';
import BottomMarkup from './BottomMarkup';
import CenterContentMarkup from './CenterContentMarkup';
import ModalMarkup from '../../../components/shared/modal/DoandDontModalComponent.js';
import PlayerModalComponent from '../../../components/shared/modal/PlayerModalComponent.js';
import ExcerciseModalComponent from '../../../components/shared/modal/ExcerciseModalComponent.js';
import HomeRemediesModalComponent from '../../../components/shared/modal/HomeRemediesModalComponent.js';
import NotificationModalComponents from '../../../components/shared/modal/NotificationModalComponent.js';
import AccupressurePointModalComponent from '../../../components/shared/modal/AccupressurePointModalComponent.js';
import AccupressureVideoModalComponent from '../../../components/shared/modal/AccupressureVideoModalComponent.js';

const DashboardMarkup = ({
appState,
rewards,
tip,
maxPoints,
phenoType,
handleTabSelect,
activeTab,
handleDropdownSelect,
activeDropdown,
handleModal,
showModal,
showPlayerModal,
handleShowPlayerModal,
handleShowNotificationModal,
showNotificationModal,
hideModal,
hideNotificationModal,
phenotypeQuickInfoKeys,
selectedPhenotypeQuickInfo,
signin,
featureChange,
selectedActivity,
markDoneHandler,
handleHomeRemediesModal,
selectedHomeRemedies,
showHomeRemediesModal,
markHomeRemediesDoneHandler,
showAccupressurePointModal,
handleAccupressurePointModal,
handleAccupressureVideoModal,
selectedAccupressure,
progressPoints,
changeSchedules,
showAccupressureModal,
selectedAccupressurePoint,
markAccupressureDoneHandler,
hideAccPointModal,
hideAccVideoModal,
showIngredients,
selectedIngredients,
showIngre

}) => {
const disableMarkAsDone= appState.recommendation&&appState.recommendation.postponedDates ? appState.recommendation.postponedDates.includes(new Date().toISOString().slice(0,10).split('-').reverse().join('-')):false;
return (
    <Grid id='DashboardMarkup' fluid>
      <Col md={3}>
        <LeftAsideMarkup
          rewards={rewards}
          phenoType={phenoType}
          signin={signin}
          phenotypeQuickInfoKeys={phenotypeQuickInfoKeys}
          selectedPhenotypeQuickInfo={selectedPhenotypeQuickInfo}
          featureChange={featureChange}
        />
      </Col>
      <Col md={6}>
        <CenterContentMarkup
          appState={appState}
          tip={tip}
          maxPoints={maxPoints}
          handleTabSelect={handleTabSelect}
          activeTab={activeTab}
          handleDropdownSelect={handleDropdownSelect}
          activeDropdown={activeDropdown}
          handleShowPlayerModal={handleShowPlayerModal}
          handleHomeRemediesModal={handleHomeRemediesModal}
          handleAccupressurePointModal={handleAccupressurePointModal}
          progressPoints={progressPoints}
          changeSchedules={changeSchedules}
        />
      </Col>
      <Col md={3}>
        <RightAsideMarkup appState={appState} handleModal={handleModal} />
      </Col>
      <Col md={3}>
        <NotificationModalComponents showModal={showNotificationModal} />
        <ExcerciseModalComponent
          hideModal={hideModal}
          showModal={showPlayerModal}
          selectedActivity={selectedActivity}
          markDoneHandler={markDoneHandler}
          disableMarkAsDone={disableMarkAsDone}
          />
        <HomeRemediesModalComponent
          hideModal={hideModal}
          showModal={showHomeRemediesModal}
          selectedActivity={selectedHomeRemedies}
          markDoneHandler={markHomeRemediesDoneHandler}
          disableMarkAsDone={disableMarkAsDone}
          showIngredients={showIngredients}
          showIngre={showIngre}
          selectedIngredients={selectedIngredients}
          />
        <AccupressurePointModalComponent
          hideAccPointModal={hideAccPointModal}
          showModal={showAccupressurePointModal}
          selectedActivity={selectedAccupressure}
          markDoneHandler={handleAccupressureVideoModal}
       />
        <AccupressureVideoModalComponent
          hideAccVideoModal={hideAccVideoModal}
          showModal={showAccupressureModal}
          selectedActivity={selectedAccupressurePoint}
          markDoneHandler={markAccupressureDoneHandler}
          disableMarkAsDone={disableMarkAsDone}
          />
        <ModalMarkup phenoType={phenoType} showModal={showModal} handleModal={handleModal} />
      </Col>
      {/*<Col md={12}><BottomMarkup appState={appState}></BottomMarkup></Col>*/}
    </Grid>
  );
};

DashboardMarkup.propTypes = {
  appState: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default DashboardMarkup;

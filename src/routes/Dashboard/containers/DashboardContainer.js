import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import signinActions from '../../Signin/modules/actions';
import DashboardMarkup from '../components/DashboardMarkup';

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      showModal: false,
      showPlayerModal: false,
      showNotificationModal: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      phenotypeQuickInfoKeys: [],
      selectedPhenotypeQuickInfo: null,
      selectedActivity: null,
      selectedHomeRemedies: null,
      showHomeRemediesModal: false,
      showAccupressurePointModal: false,
      showAccupressureModal: false,
      selectedAccupressure: null,
      selectedAccupressurePoint: null,
      showIngre:false,
      selectedIngredients:null
    };
  }

  componentWillMount () {
    this.props.actions.getRecommendation();
    this.props.actions.getReward();
    this.props.actions.getPhenoType();
    this.props.actions.getProgress();
    this.props.actions.getTips();
    this.props.actions.getMaxPoints();
    this.props.actions.getProgressPoints();
    this.props.actions.getUserDetails();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.phenoType) {
      this._init(newProps);
    }
  }

  render () {
    return (
      <DashboardMarkup
        appState={this.props.appState}
        rewards={this.props.rewards}
        maxPoints={this.props.maxPoints}
        phenoType={this.props.phenoType}
        tip={this.props.tip}
        progressPoints={this.props.progressPoints}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        handleDropdownSelect={this._handleDropdownSelect}
        activeDropdown={this.state.activeDropdown}
        showModal={this.state.showModal}
        handleModal={this._handleModal}
        handleShowPlayerModal={this._handleShowPlayerModal}
        hideModal={this._hideModal}
        showPlayerModal={this.state.showPlayerModal}
        handleShowNotificationModal={this._handleShowNotificationModal}
        hideNotificationModal={this._hideNotificationModal}
        showNotificationModal={this.state.showPlayerModal}
        signin={this.props.signin}
        dots={this.state.dots}
        infinite={this.state.infinite}
        speed={this.state.speed}
        slidesToShow={this.state.slidesToShow}
        slidesToScroll={this.state.slidesToScroll}
        phenotypeQuickInfoKeys={this.state.phenotypeQuickInfoKeys}
        selectedPhenotypeQuickInfo={this.state.selectedPhenotypeQuickInfo}
        featureChange={this._featureChange}
        selectedActivity={this.state.selectedActivity}
        selectedHomeRemedies={this.state.selectedHomeRemedies}
        selectedAccupressure={this.state.selectedAccupressure}
        selectedAccupressurePoint={this.state.selectedAccupressurePoint}
        markDoneHandler={this._markDoneHandler}
        markHomeRemediesDoneHandler={this._markHomeRemediesDoneHandler}
        handleHomeRemediesModal={this._handleHomeRemediesModal}
        showHomeRemediesModal={this.state.showHomeRemediesModal}
        showAccupressurePointModal={this.state.showAccupressurePointModal}
        showAccupressureModal={this.state.showAccupressureModal}
        handleAccupressurePointModal={this._handleAccupressurePointModal}
        handleAccupressureVideoModal={this._handleAccupressureVideoModal}
        changeSchedules={this._changeSchedules}
        markAccupressureDoneHandler={this._markAccupressureDoneHandler}
        hideAccPointModal={this._hideAccPointModal}
        hideAccVideoModal={this._hideAccVideoModal}
        showIngredients={this._showIngredients}
        selectedIngredients={this.state.selectedIngredients}
        showIngre={this.state.showIngre}
      />
    );
  }

  _init(newProps) {
    const { phenotypeQuickInfo } = newProps.phenoType;
    if (phenotypeQuickInfo) {
      const phenotypeQuickInfoKeys = _.keysIn(phenotypeQuickInfo);
      this.setState({phenotypeQuickInfoKeys, selectedPhenotypeQuickInfo: phenotypeQuickInfoKeys[0]});
    }
  }

  @autobind
  _updateDashboard() {
    this.props.actions.getRecommendation();
    this.props.actions.getReward();
    this.props.actions.getProgress();
    this.props.actions.getProgressPoints();
  }
  
  @autobind
  _handleTabSelect (activeTab) {
    this.setState({activeTab});
  }
  @autobind
  _handleDropdownSelect () {
    this.setState({activeDropdown: !this.state.activeDropdown});
  }
  @autobind
  _handleModal (event, showModal) {
    this.setState({showModal});
  }
  @autobind
  _handleShowPlayerModal (selectedActivity) {
    this.setState({showPlayerModal: true, selectedActivity});
  }
  @autobind
  _hideModal () {
    this.setState({showPlayerModal: false, showHomeRemediesModal: false, showAccupressurePointModal: false,showAccupressureModal: false,showIngre:false});
  }
  @autobind
  _hideAccVideoModal () {
    this.setState({showAccupressurePointModal: true,showAccupressureModal: false});
  }
  @autobind
  _hideAccPointModal () {
    this.setState({ showAccupressurePointModal:false});
  }
   @autobind
  _handleShowNotificationModal () {
    this.setState({showNotificationModal: true});
  }
  @autobind
  _hideNotificationModal () {
    this.setState({showNotificationModal: false});
  }
  
  @autobind
  _featureChange (value) {
    this.setState({selectedPhenotypeQuickInfo: value});
  }
  
  @autobind
  _markDoneHandler (id) {
    this.props.actions.setExcerciseComplete({id}).then(() => {
      this._updateDashboard();
    });
    this.setState({showPlayerModal: false});
  }
  @autobind
  _handleHomeRemediesModal (selectedHomeRemedies) {
    this.setState({showHomeRemediesModal: true, selectedHomeRemedies});
  }
  
  @autobind
  _markHomeRemediesDoneHandler (id) {
    this.props.actions.setHomeRemediesComplete({id}).then(() => {
      this._updateDashboard();
    });
    this.setState({showHomeRemediesModal: false});
  }
  @autobind
  _handleAccupressurePointModal (selectedAccupressure) {
    this.setState({showAccupressurePointModal: true, selectedAccupressure});
  }
  @autobind
  _handleAccupressureVideoModal (selectedAccupressurePoint) {
    this.setState({showAccupressurePointModal: false, showAccupressureModal: true, selectedAccupressurePoint});
  }
  
  @autobind
  _markAccupressureDoneHandler (id) {
    this.props.actions.setAccupressureComplete({id}).then(() => {
      this._updateDashboard();
    });
    this.setState({showAccupressureModal: false});
  }
  @autobind
  _changeSchedules (value) {
    this.setState({activeDropdown: !this.state.activeDropdown});
    this.props.actions.changeSchedules({postponeDates:value}).then(() => {
      this.props.actions.getRecommendation();
    });
  }
  @autobind
  _showIngredients (selectedIngredients) {
     this.setState({selectedIngredients,showIngre:true})
  }
}

Dashboard.propTypes = {
  actions: PropTypes.shape({
    getRecommendation: PropTypes.func,
    getReward: PropTypes.func,
    getPhenoType: PropTypes.func,
    getProgress: PropTypes.func,
    getTips: PropTypes.func,
    getMaxPoints:PropTypes.func,
    setExcerciseComplete:PropTypes.func,
    setHomeRemediesComplete:PropTypes.func,
    getProgressPoints:PropTypes.func,
    changeSchedules:PropTypes.func,
    setAccupressureComplete:PropTypes.func,
    getUserDetails:PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.dashboard,
    rewards:state.dashboard.rewardPoints,
    signin: state.signin,
    phenoType:state.dashboard.phenoType,
    tip:state.dashboard.tip,
    maxPoints:state.dashboard.maxPoints,
    progressPoints:state.dashboard.progressPoints,
  }),
  mapDispatchToProps = (dispatch) => {
     
    const
      { getRecommendation, getReward, getPhenoType, getProgress,getTips,getMaxPoints, setExcerciseComplete, setHomeRemediesComplete,getProgressPoints, setAccupressureComplete, changeSchedules } = actions,
      { getUserDetails } = signinActions;

    return {
      actions: bindActionCreators({ getRecommendation, getReward, getPhenoType, getProgress,getTips,getMaxPoints, setExcerciseComplete, setHomeRemediesComplete,setAccupressureComplete, getProgressPoints,changeSchedules, getUserDetails}, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

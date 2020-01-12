import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import signinActions from '../../Signin/modules/actions';
import HpsWellnessPortalMyarticle from '../components/tabs/HpsWellnessPortalMyarticle';

class ArticlesForMe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      viewFavourite:false
    };
  }
  componentWillMount () {
    this.props.actions.getArticles();
    this.props.actions.getFavArticles();
    }
  render () {
    return (
     <HpsWellnessPortalMyarticle
        articles={this.props.articles}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        markFavourite={this._markFavourite}
        favArticles={this.props.favArticles}
        viewFavourite={this.state.viewFavourite}
        handleViewFavourite={this._handleViewFavourite}/>
    );
  }
  @autobind
  _markFavourite(id) {
  this.props.actions.setFavArticles(id).then((response) => {
    this.props.actions.getArticles();
    this.setState(this.state);
  });

  }
  @autobind
  _handleViewFavourite() {
    this.props.actions.getFavArticles();
  this.setState({viewFavourite:!this.state.viewFavourite})
  }
}
ArticlesForMe.propTypes = {
  actions: PropTypes.shape({
     getArticles:PropTypes.func,
     getFavArticles:PropTypes.func,
     setFavArticles:PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    articles: state.articles.articles,
    favArticles:state.myhps.favArticles,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getArticles,getFavArticles,setFavArticles } = actions;

    return {
      actions: bindActionCreators({ getArticles,getFavArticles,setFavArticles }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesForMe);

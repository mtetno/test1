import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import ArticlesformeDetail from '../components/tabs/ArticlesformeDetail';


class ArticlesForMeDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: true,
      articleId:0,
    };
  }
 
  componentWillMount () {
    this.props.actions.getArticles();
    this.setState({articleId:this.props.params.articleId})
    }
  render () {
    return (
     <ArticlesformeDetail
        articles={this.props.articles}
        handleTabSelect={this._handleTabSelect}
        activeTab={this.state.activeTab}
        actions={this.props.actions}
        articleId={this.state.articleId}/>
    );
  }
}

ArticlesForMeDetails.propTypes = {
  actions: PropTypes.shape({
    getArticles:  PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
   articles: state.myhps.articles,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { getArticles } = actions;

    return {
      actions: bindActionCreators({ getArticles }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesForMeDetails);

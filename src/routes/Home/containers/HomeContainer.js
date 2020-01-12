import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import HomeMarkup from '../components/HomeMarkup';
import _ from 'lodash';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pageNumber: 1,
      pages: [],
    };
  }

  componentWillMount () {
    this.props.actions.getPages();
  }

  componentWillReceiveProps (nextProps) {
    const { pages } = nextProps.appState;
    this.setState({
      pages,
    });
  }

  render () {
    let { pages } = this.state;
    pages = _.sortBy(pages, 'order');
    return (
      <HomeMarkup
        formData={pages}
        pageNumber={this.state.pageNumber}
        previousClick={this._previousClick}
        nextClick={this._nextClick}
        updateValue={this._updateValue}
      />
    );
  }

  @autobind
  _updateValue (e, key, formType) {
    if (key !== undefined) {
      const { pages } = this.state;
      pages[formType].questions[key].value = e.target.value;
      this.setState({
        pages,
      });
    }
  }

  @autobind
  _previousClick () {
    let
      { pageNumber } = this.state;
    pageNumber--;
    this.setState({
      pageNumber,
    });
  }

  @autobind
  _nextClick () {
    let
      { pageNumber } = this.state;
    pageNumber++;
    this.setState({
      pageNumber,
    });
  }
}

Home.propTypes = {
  actions: PropTypes.shape({
    getPages: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.home,
  }),
  mapDispatchToProps = (dispatch) => {
    const { getPages } = actions;
    return {
      actions: bindActionCreators({ getPages }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);

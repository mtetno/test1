import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import './AuthLayout.scss';
import NavLayout from './NavLayout';
import NavLayoutBottom from '../BottomLayout/NavLayoutBottom';
import { Col } from 'react-bootstrap';
import actions from '../../routes/Signin/modules/actions';


class AuthLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state={ 
     myHps:false,
     myFamily:false,
     seekHelp:false,
     notification:false,
     faq:false,
     myaccount:false,
     dashboard: false,
   }
  }
  render () {
    const { userDetails } = this.props.signin;
    return (
        <Col>
          <Col>
            <NavLayout userDetails={userDetails} signOut={this._signOut} navStates={this.state} handleSelected={this._handleSelectd} />
            <Col className='page-layout__viewport'>
              {this.props.children}
            </Col>
          </Col>
        </Col>
    );
  }

  @autobind
  _signOut (e) {
    if (e) {
      e.preventDefault();
    }
    this.props.actions.signOut();
  }
   
  @autobind
   _handleSelectd(navName) {
  
  this.setState({ 
     myHps:false,
     myFamily:false,
     seekHelp:false,
     notification:false,
     faq:false,
     myaccount:false,
     dashboard: false,
   });

  this.setState({[navName]:true});
  }
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.shape({
    signOut: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
    signin: state.signin,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { signOut } = actions;

    return {
      actions: bindActionCreators({ signOut }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);

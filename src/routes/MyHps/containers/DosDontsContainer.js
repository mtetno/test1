import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Col, Tabs, Tab, Image, Button, Modal, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import actions from '../modules/actions';
import '../../../components/shared/modal/DoandDontModalComponent.scss';
import humanAvatar from '../../../styles/img/dos-donts-avatar.png';

class DosDontsContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 1,
      activeDropdown: false,
      showModal:true
    };
  }

  render () {
    const phenoType=this.props.appState.phenoType?this.props.appState.phenoType:null;
    const donts=phenoType&&phenoType.dosAndDonts?phenoType.dosAndDonts.donts:null;
    const dos=phenoType && phenoType.dosAndDonts?phenoType.dosAndDonts.dos:{Diet:[],Lifestyle:[],Diseases:[]};
    return (
      <Col md={12}>
      <Row className='inner-body' style={{height:'100%'}}>
        <Col md={3} className='left-side'>
        <Image src={humanAvatar} responsive />
        </Col>
        <Col md={9} className='right-side' style={{overflow:'hidden',height:'100%'}}>
        <table className='table table-bordered'>
          <thead>
            <tr key='title'>
              <th>Do’s</th>
              <th>don'ts</th>
            </tr>
          </thead>
          <tbody>
          {dos.Diet[0]!=null&& donts.Diet.length!=0 && dos.Diet.length!=0&&donts.Diet[0]!=null?<tr><td><h4>Diet</h4></td></tr>:""}
           {
             dos.Diet[0]!=null&& donts.Diet.length!=0 && dos.Diet.length!=0&&donts.Diet[0]!=null?
           dos.Diet.map((data,index)=>
            donts.Diet[index]!=undefined ? 
            <tr key={index}>
              <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
              <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Diet[index]}</td>
            </tr>:" "
           ):""
          }
         {dos.Diseases[0]!=null&& donts.Diseases.length!=0 && dos.Diseases.length!=0&&donts.Diseases[0]!=null?<tr><td><h4>Diseases</h4></td></tr>:""}
           {dos.Diseases[0]!=null&& donts.Diseases.length!=0 && dos.Diseases.length!=0&&donts.Diseases[0]!=null?
           dos.Diseases.map((data,index)=>
            donts.Diseases[index]!=null ? 
            <tr key={index}>
              <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
              <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Diseases[index]}</td>
            </tr>:" "
           ):" "
          }
          {dos.Lifestyle[0]!=null&& donts.Lifestyle.length!=0 && dos.Lifestyle.length!=0&&donts.Lifestyle[0]!=null?<tr><td><h4>Lifestyle</h4></td></tr>:""}
          {
            dos.Lifestyle[0]!=null&& donts.Lifestyle.length!=0 && dos.Lifestyle.length!=0&&donts.Lifestyle[0]!=null?
           dos.Lifestyle.map((data,index)=>
            donts.Lifestyle[index]!=undefined ? 
            <tr key={index}>
              <td key={'dos'+index}><span aria-hidden='true' className='fa fa-check icon-check' />{data}</td>
              <td key={'donts'+index}><span aria-hidden='true' className='fa fa-times icon-cross' />{donts.Lifestyle[index]}</td>
            </tr>:" "
           ):""
          }
          </tbody>
        </table>
      </Col>
      </Row>
    </Col>
    );
  }
  @autobind
  _handleModal (event, showModal) {
    this.setState({showModal});
  }
}

DosDontsContainer.propTypes = {
  actions: PropTypes.shape({
    forget: PropTypes.func,
  }),
  appState: PropTypes.object,
};

const mapStateToProps = (state) => ({
    appState: state.myhps,
  }),
  mapDispatchToProps = (dispatch) => {
    const
      { forget } = actions;

    return {
      actions: bindActionCreators({ forget }, dispatch),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(DosDontsContainer);

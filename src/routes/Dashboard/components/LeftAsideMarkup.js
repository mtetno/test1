import React from 'react';
import PropTypes from 'prop-types';
import { Col, Label, Image, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './LeftAsideMarkup.scss';
import FontAwesome from 'react-fontawesome';
import humanAvatar from '../../../styles/img/human-avatar.png';
import extrimePower from '../../../styles/img/will-power-icon.png';
import forgiveEasily from '../../../styles/img/forgive-easily-icon.png';
import sharpMemory from '../../../styles/img/sharp-memory-icon.png';
import weightEasily from '../../../styles/img/dont-gain-weight.png';
import setting from '../../../styles/img/lens.png';
import reward from '../../../styles/img/reward.png';
import _ from 'lodash';

const LeftAsideMarkup = ({
phenoType,
rewards,
data,
signin,
phenotypeQuickInfoKeys,
selectedPhenotypeQuickInfo,
featureChange,
}) => {
  const { userDetails } = signin;
  const phenotypeQuickInfo = phenoType ? phenoType.phenotypeQuickInfo : null;
  const features = phenotypeQuickInfo ? _.take(_.get(phenotypeQuickInfo, selectedPhenotypeQuickInfo), 5) : [];
 return (
    <Col className='left-aside'>
      <Col className='text-center'>
        <Col className='reward-counter'>
          <Col className=''>
            <Image src={reward} responsive />
            <div className='point'> {rewards?rewards.points:0}</div>
          </Col>
          
        </Col>
        <Col className='name'>{userDetails && userDetails.firstName} {userDetails && userDetails.lastName}</Col>
        <Label bsStyle='default'> {phenoType?phenoType.phenotype:""}</Label>
      </Col>
      <Col className='settings text-center'>
        <Col className='dropdown-wrap lens'>
          <ButtonToolbar>
            <DropdownButton onSelect={featureChange} bsStyle='default' title={<Image src={setting} responsive />} noCaret id='basic-nav-dropdown'>
           
              {
                phenotypeQuickInfoKeys.map((item, index) => {
                  return <MenuItem key={index} eventKey={item}>{item}</MenuItem>
                })
              }
            </DropdownButton>
          </ButtonToolbar>
        </Col>
        <Image src={humanAvatar} responsive />
      </Col>
      <Col className='text-center listing'>
        <h1>{selectedPhenotypeQuickInfo}</h1>
        <span className='icon-human-avatar' />
        <ul>
          {
            features.map((feature, index) => {
              return <li key={feature}><Image src={sharpMemory} responsive /><span className='text'>{feature}</span></li>
            })
          }
        </ul>
      </Col>
    </Col>
  );
};

LeftAsideMarkup.propTypes = {
  data: PropTypes.object,
};

export default LeftAsideMarkup;

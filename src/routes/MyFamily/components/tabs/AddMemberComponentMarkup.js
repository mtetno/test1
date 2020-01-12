import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Label, Image, Row ,Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './FamilyMemberUserProfile.scss';
import { browserHistory } from 'react-router';
import userpic from '../../../../styles/img/user-pic.png';
import son from '../../../../styles/img/son.png';
import spouse from '../../../../styles/img/spouse.png';
import daughter from '../../../../styles/img/daughter.png';
import './AddMemberComponentMarkup.scss';

const AddMemberComponentMarkup = ({
data,
firstname,
lastName,
email,
phone,
nickName,
relationship,
handleStart,
id,
}) => {
  return (
    <Col md={6} className="outer-box">
      <Grid fluid className="main-box owner-box">
        <Row>
          <Col xs={3}>
            <div>
              <Image src={userpic} responsive thumbnail circle/>
            </div>
          </Col>
          <Col xs={9} onClick={()=>browserHistory.push('/myfamily/userinfo')}>
             <Row>
                <Col md={12}>
                    <div className="pull-right right-corner">SELF</div>
                </Col>
             </Row><Row>
                <Col md={12}>
                    <div className="family-name">{firstname}</div>
                </Col>
             </Row>
             <Row>
                <Col md={12}>
                  <Row>
                      <Col xs={12} >
                           <div className="main-side">
                               <div className="right-side">
                                 <FontAwesome name='envelope' />
                              </div>
                              <div className="left-side">
                                {email}
                              </div>
                            </div>
                      </Col>
                  </Row>
                </Col>
             </Row>
          </Col>
        </Row>
        <Button onClick={ () => handleStart(id)} type="submit"  className="btn-questionair" id="btnQuestionair">Questionair</Button>
      </Grid>

    </Col>
  );
};

AddMemberComponentMarkup.propTypes = {
  data: PropTypes.string,
  firstname: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  nickName: PropTypes.string,
  relationship: PropTypes.string,
  handleStart : PropTypes.func,
};

export default AddMemberComponentMarkup;

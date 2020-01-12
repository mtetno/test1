import React from 'react';
import PropTypes from 'prop-types';
import { Col,Grid,Table } from 'react-bootstrap';
import './FAQContentMarkup.scss';

const FAQContentMarkup = ({
appState,
data,
}) => {
  return (
   <Grid>
        <Col md={4}></Col>
        <Col md={4} className="faq-container"><h1>FAQ Content</h1></Col>
        <Col md={4}></Col>
        <Col md={12}>
              <div className='question-content'>
                    1.  What does phenotype mean and how do we analyse you?
              </div>
              <div className='Answer-content'>
                    The genetic code or DNA of each individual carries the latent blue print of the constitution of the individual. It carries the anatomical features - structure, colour, texture, size and shape of the hair, musculo-skeletal structure, eyes and inherent style of functioning or physiology of the individual; this is known as the genotype of a person. In the womb of the mother, as the foetus is growing the genotype translates into the inherent constitution of the individual or the phenotype. The phenotype of the individual can be diagnosed from the physical and physiological features of the individual. The phenotype of the individual is like the finger print or iris; it never changes throughout life.
              </div>
        </Col>
        <Col md={12}>
              <div className='question-content'>
                    2.  How Nature, Nurture & Free Will decides one’s health conditions?
              </div>
              <div className='Answer-content'>
                    Nature - Each person’s constitution is unique and has certain inherent strengths, weaknesses and threats.  Some systems of each phenotype are inherently weaker and have a predilection for certain types of diseases; this is the role that nature plays in defining the health of an individual.
                    Nurture – the upbringing of an individual and the choices that he/she has made till this moment either enhance or suppress the natural tendency of the individual towards certain diseases. These include socio-economic status, diet, life style, education, vocation, region that he/she lives in and the facilities, amenities and opportunities available. All these factors put together are responsible for your current health status. 
                    Free will – Each one of us, at any stage in life can yet take control of our health and destiny by the choices that we make hence forth. It is never too late, provided you know what choices are best for you considering your current socio-economic, health and disease status, your age, gender, diseases, likes and dislikes.

              </div>
        </Col>
        <Col md={12}>
              <div className='question-content'>
                   3. Who else says Nature, Nurture and Free Will matters?
              </div>
              <div className='Answer-content'>
                   Since centuries Ayurved has known the importance of nature (prakruti),  ahar (diet), vihar (life style), achar (vocation), vichar (beliefs, values and principles), nidra (sleep pattern), maithun (sex life), dinacharya (daily routine and rutucharya (seasonal changes). HPS has given data based scientific validation to the above concept.  
              </div>
        </Col>
        <Col md={12}>
              <div className='question-content'>
                   4. What is BMI?
              </div>
              <div className='Answer-content'>
                   The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2

                  The WHO regards a BMI of less than 18.5 as underweight and may indicate malnutrition, an eating disorder, or other health problems, while a BMI equal to or greater than 25 is considered overweight and above 30 is considered obese. 
                  <Table bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th colSpan="2">BMI (kg/m2)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td className="sub-heading">From</td>
                        <td className="sub-heading">To</td>
                      </tr>
                      <tr>
                        <td>Very severely underweight</td>
                        <td></td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>Severely underweight</td>
                        <td>15</td>
                        <td>16</td>
                      </tr>
                       <tr>
                        <td>Underweight</td>
                        <td>16</td>
                        <td>18.5</td>
                      </tr>
                       <tr>
                        <td>Normal (healthy weight)</td>
                        <td>18.5</td>
                        <td>25</td>
                      </tr>
                       <tr>
                        <td>Overweight</td>
                        <td>25</td>
                        <td>30</td>
                      </tr>
                       <tr>
                        <td>Obese Class I (Moderately obese)</td>
                        <td>30</td>
                        <td>35</td>
                      </tr>
                       <tr>
                        <td>Obese Class II (Severely obese)</td>
                        <td>35</td>
                        <td>40</td>
                      </tr> <tr>
                        <td>Obese Class III (Very severely obese)</td>
                        <td>40</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
              </div>
        </Col>
        <Col md={12}>
              <div className='question-content'>
                   5. Why place of birth has been asked to me?
              </div>
              <div className='Answer-content'>
                   It’s been proven by many scientific studies that place of birth and the geo-climatic conditions have a significant impact on your constitution and nurture. By your input, we identify and classify it as arid zone or semi-arid zone or desert zone etc. and map it with data of people from the region to create road map for you.
              </div>
        </Col>
        <Col md={12}>
              <div className='question-content'>
                    6.  Why my marital status, number of children and their birth year has been asked to me?
              </div>
              <div className='Answer-content'>
                   To map your Free Will Decisions with your Nature and Nurture. Estimate the stress on your finances and the demands on the various roles that one plays in a family. 
              </div>
        </Col>
   </Grid>
  );
};

FAQContentMarkup .propTypes = {
  data: PropTypes.object,
  handleTabSelect: PropTypes.func,
  activeTab: PropTypes.number,
};

export default FAQContentMarkup;

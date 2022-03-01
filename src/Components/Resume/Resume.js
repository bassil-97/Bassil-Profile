import React from 'react';
import './Resume.css';

import SectionTitle from '../helpers/UI/SectionTitle';
import TimelineItem from './TimelineItem';
import CertificateItem from '../Certificates/CertificateItem';
import SkillItem from '../Skills/SkillItem';

export default function Resume() {
  return (
    <div className='resume'>
        <div className='page-title'>
            <h1>Resume</h1>
        </div>
        <div className='page-content'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <SectionTitle>Education</SectionTitle>
                <div className='timeline'>
                  <TimelineItem
                    period={'2019'}
                    company={'Yarmouk University'}
                    title={'CIS - Master'}
                    text={'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'}
                  />
                  <TimelineItem
                    period={'2015'}
                    company={'Yarmouk University'}
                    title={'CIS - Bachelor'}
                    text={'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'}
                  />
                </div>
              </div>
              <div className='col-xs-12 col-sm-6'>
              <SectionTitle>Experience</SectionTitle>
                <div className='timeline'>
                  <TimelineItem
                    period={'2021'}
                    company={'Mostaql'}
                    title={'Full stack web developer'}
                    text={'Experienced Web Developer working in the Computer Software industry. Skilled in Soft Skills, Team Motivation, Computer Literacy, and Creativity Skills. Strong Frontend and Backend experience.'}
                  />
                  <TimelineItem
                    period={'2020'}
                    company={'Al-Hussain Technical University'}
                    title={'Web Developer Trainee'}
                    text={'Trainee – HTU (Hussain Technical University) National ICT upskilling program (340hrs), certified program from HTU University, Technical(180 hrs.): o HTML5. o CSS3. o JavaScript.'}
                  />
                </div>
              </div>
            </div>
            <div className='row mt-5'>
              <div><SectionTitle>Certificates</SectionTitle></div>
              <div className='col-xs-12 col-sm-6 mb-2'>
                <CertificateItem
                  language={'HTML'}
                  title={'CCA-Certificate-HTML'}
                  level={'Level 1'}
                />
              </div>
              <div className='col-xs-12 col-sm-6'>
                <CertificateItem
                  language={'CSS'}
                  title={'CCA-Certificate-CSS'}
                  level={'Level 1'}
                />
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-xs-12 col-sm-6 mb-2'>
                <CertificateItem
                  language={'JavaScript'}
                  title={'CCA-Certificate-Javascript'}
                  level={'Level 1'}
                />
              </div>
              <div className='col-xs-12 col-sm-6'>
                <CertificateItem
                  language={'jQuery'}
                  title={'CCA-Certificate-jQuery'}
                  level={'Level 1'}
                />
              </div>
            </div>
            <div className='row mt-5'>
              <div><SectionTitle>Coding Skills</SectionTitle></div>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'HTML5'} level={100} />
              </div>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'CSS3'} level={95} />
              </div>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'JavaScript'} level={95} />
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'React.js'} level={95} />
              </div>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'Bootstrap'} level={100} />
              </div>
              <div className='col-xs-12 col-lg-4 d-flex justify-content-center'>
                <SkillItem skill={'APIs'} level={95} />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

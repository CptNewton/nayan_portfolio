/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    }); 

  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Certifications</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-cert">
            {certifications.map((certification) => (
              <motion.div
                className="app__skills-cert-item"
                key={certification.year}
              >
                <div className="app__skills-cert-year">
                  <p className="bold-text">{certification.year}</p>
                </div>
                <motion.div className="app__skills-cert-trainings">
                  {certification.trainings.map((training) => (
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{ duration: 0.5 }}
                        className="app__skills-cert-trainings">     
                        <a id={training.name} data-tooltip-content={training.desc}><h4>{training.name}</h4></a>
                        <p className="p-text">{training.company}</p>     
                      </motion.div>                     
                      <Tooltip
                        anchorId={training.name}              
                        className="skills-tooltip"                     
                        effect="float"
                      />
                       
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

      </div>
    </>
  )
  
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg', 
);
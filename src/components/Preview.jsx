import React from 'react';
import PersonalDetails from './Previews/PersonalDetails';
import Education from './Previews/Education';
import styles from '../styles/Preview.module.css';
import Skills from './Previews/Skills';

const Preview = (props) => {
  const { personalDetails, education, skills } = props.user;
  return (
    <div className={styles.preview}>
      <PersonalDetails personalDetails={personalDetails} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
};

export default Preview;

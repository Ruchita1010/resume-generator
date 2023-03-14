import React from 'react';
import PersonalDetails from './Previews/PersonalDetails';
import Education from './Previews/Education';
import styles from '../styles/Preview.module.css';

const Preview = (props) => {
  const { personalDetails, education } = props.user;
  return (
    <div className={styles.preview}>
      <PersonalDetails personalDetails={personalDetails} />
      <Education education={education} />
    </div>
  );
};

export default Preview;

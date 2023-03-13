import React from 'react';
import PersonalDetails from './Previews/PersonalDetails';
import styles from '../styles/Preview.module.css';

const Preview = (props) => {
  const { personalDetails } = props.user;
  return (
    <div className={styles.preview}>
      <PersonalDetails personalDetails={personalDetails} />
    </div>
  );
};

export default Preview;

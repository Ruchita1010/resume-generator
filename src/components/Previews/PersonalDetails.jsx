import React from 'react';
import styles from '../../styles/PersonalDetailsPreview.module.css';

const PersonalDetails = (props) => {
  const { firstName, lastName, email, phoneNumber, linkedin, github, website } =
    props.personalDetails;
  return (
    <div className={styles.personal_details}>
      <p className={styles.name}>
        {firstName} {lastName}
      </p>
      <div className={styles.contact_details}>
        {email && <span className={styles.pipe}>{email}</span>}
        {phoneNumber && <span className={styles.pipe}>{phoneNumber}</span>}
        {linkedin && (
          <span className={styles.pipe}>
            <a href={`https://linkedin.com/in/${linkedin}`}>LinkedIn</a>
          </span>
        )}
        {github && (
          <span className={styles.pipe}>
            <a href={`https://github.com/${github}`}>GitHub</a>
          </span>
        )}
        {website && (
          <span>
            <a href={`https://${website}`}>Portfolio</a>
          </span>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;

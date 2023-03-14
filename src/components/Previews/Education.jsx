import React from 'react';
import styles from '../../styles/Preview.module.css';

const Education = (props) => {
  return (
    <div className={styles.section}>
      <p className={styles.section_title}>EDUCATION</p>
      <div className={styles.section_content}>
        {props.education.map((item) => (
          <div key={item.id} className={styles.education_preview}>
            <div>
              <p>{item.degree}</p>
              <p>{item.university}</p>
            </div>
            <p>
              {item.startDate} - {item.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

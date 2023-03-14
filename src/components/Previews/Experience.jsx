import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../styles/Preview.module.css';

const Experience = (props) => {
  const { experience } = props;
  return (
    <div className={styles.section}>
      <p className={styles.section_title}>EXPERIENCE</p>
      <div
        className={` ${styles.section_content} ${styles.experience_preview}`}>
        {experience.map((item) => (
          <div key={item.id}>
            <div className={styles.job_header}>
              <p className={styles.role}>{item.role}</p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </div>
            <p className={styles.company}>{item.company}</p>
            <ul className={styles.job_description}>
              {item.description
                .split('\n')
                .map(
                  (listItem) =>
                    listItem !== '' && <li key={uuidv4()}>{listItem}</li>
                )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

import React from 'react';
import styles from '../../styles/Preview.module.css';

const Skills = (props) => {
  const { skills } = props;
  return (
    <div className={styles.section}>
      <p className={styles.section_title}>SKILLS</p>
      <div className={`${styles.section_content} ${styles.skills_preview}`}>
        {skills.map((item) => (
          <div key={item.id}>{item.skillValue}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

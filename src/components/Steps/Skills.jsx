import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = () => {
  return (
    <div className={styles.input_section}>
      <FormElement
        label="Skills"
        type="text"
        name="skills"
        placeholder="e.g. React"
      />
      <button className={`${styles.btn} ${styles.add_skills_btn}`}>+</button>
    </div>
  );
};

export default Skills;

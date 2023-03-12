import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = () => {
  return (
    <div className={styles.input_section}>
      <FormElement
        formAttr={{
          type: 'text',
          name: 'skills',
          placeholder: 'e.g. React',
        }}
        otherData={{ label: 'Skills', category: 'skills' }}
      />
      <button className={`${styles.btn} ${styles.add_skills_btn}`}>+</button>
    </div>
  );
};

export default Skills;

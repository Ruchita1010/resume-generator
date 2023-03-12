import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = ({ skills, handleInputChange }) => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className={styles.input_section}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'skills',
              placeholder: 'e.g. React',
              value: skill,
              handleInputChange,
            }}
            otherData={{ label: 'Skill', category: 'skills', index }}
          />
        </div>
      ))}
    </>
  );
};

export default Skills;

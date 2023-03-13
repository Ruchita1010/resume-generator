import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = ({ skills, handleInputChange }) => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.input_section}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'skillValue',
              placeholder: 'e.g. React',
              value: skill.skillValue,
              handleInputChange,
            }}
            otherData={{ label: 'Skill', category: 'skills', id: skill.id }}
          />
        </div>
      ))}
    </>
  );
};

export default Skills;

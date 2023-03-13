import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = ({ skills, handleInputChange, addItem }) => {
  const newItem = { id: uuidv4(), skillValue: '' };
  return (
    <>
      <div className={styles.add_btn_container}>
        <button onClick={() => addItem('skills', newItem)}>Add More</button>
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

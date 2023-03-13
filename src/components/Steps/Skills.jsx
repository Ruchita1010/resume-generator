import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = ({ skills, handleInputChange, addItem, deleteItem }) => {
  const newItem = { id: uuidv4(), skillValue: '' };
  return (
    <>
      <div className={styles.add_btn_container}>
        <button onClick={() => addItem('skills', newItem)}>Add More</button>
      </div>
      <div className={styles.input_section}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skill_wrapper}>
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
            <button
              className={styles.delete_skill_btn}
              onClick={() => deleteItem('skills', skill.id)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

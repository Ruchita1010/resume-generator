import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Skills = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={styles.input_section}>
        <FormElement
          formAttr={{
            type: 'text',
            name: 'skills',
            placeholder: 'e.g. React',
          }}
          otherData={{ label: 'Skill', category: 'skills' }}
        />
      </div>
    </>
  );
};

export default Skills;

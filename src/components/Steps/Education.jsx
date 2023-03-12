import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Education = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={`${styles.input_section} ${styles.card}`}>
        <FormElement
          formAttr={{
            type: 'text',
            name: 'degree',
            placeholder: 'e.g. B.S. in Computer Science',
          }}
          otherData={{ label: 'Degree', category: 'education' }}
        />
        <FormElement
          formAttr={{
            type: 'text',
            name: 'university',
            placeholder: 'e.g. Penn State University',
          }}
          otherData={{ label: 'University', category: 'education' }}
        />
        <FormElement
          formAttr={{
            type: 'text',
            name: 'start-date',
            placeholder: 'e.g. September 2012',
          }}
          otherData={{ label: 'Start Date', category: 'education' }}
        />
        <FormElement
          formAttr={{
            type: 'text',
            name: 'end-date',
            placeholder: 'e.g. May 2016 or Present',
          }}
          otherData={{ label: 'End Date', category: 'education' }}
        />
        <button>Delete</button>
      </div>
    </>
  );
};

export default Education;

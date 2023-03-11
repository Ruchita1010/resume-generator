import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepUtils.module.css';

const Education = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={`${styles.input_section} ${styles.card}`}>
        <FormElement
          label="Degree"
          type="text"
          name="degree"
          placeholder="e.g. B.S. in Computer Science"
        />
        <FormElement
          label="University"
          type="text"
          name="university"
          placeholder="e.g. Penn State University"
        />
        <FormElement
          label="Start Date"
          type="text"
          name="start-date"
          placeholder="e.g. September 2012"
        />
        <FormElement
          label="End Date"
          type="text"
          name="end-date"
          placeholder="e.g. May 2016 or Present"
        />
        <button>Delete</button>
      </div>
    </>
  );
};

export default Education;

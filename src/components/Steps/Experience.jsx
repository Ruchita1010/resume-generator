import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Experience = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={`${styles.input_section} ${styles.card}`}>
        <FormElement
          label="Role"
          type="text"
          name="role"
          placeholder="e.g. Software Engineer"
        />
        <FormElement
          label="Company"
          type="text"
          name="company"
          placeholder="e.g. Petflix"
        />
        <FormElement
          label="Start Date"
          type="text"
          name="start-date"
          placeholder="e.g. May 2020"
        />
        <FormElement
          label="End Date"
          type="text"
          name="end-date"
          placeholder="e.g. May 2023 or Present"
        />
        <div
          className={styles.description}
          id={styles.experience_desc_container}>
          <label htmlFor="experience-desc">Description</label>
          <textarea
            id="experience-desc"
            placeholder="e.g. Designed RESTful APIs for data processing&#10;Implemented CI pipelines to improve software quality"></textarea>
        </div>
        <button>Delete</button>
      </div>
    </>
  );
};

export default Experience;

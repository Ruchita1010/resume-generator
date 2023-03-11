import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepUtils.module.css';

const Projects = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={`${styles.input_section} ${styles.card}`}>
        <FormElement
          label="Project Name"
          type="text"
          name="project-name"
          placeholder="e.g. E-commerce Website"
        />
        <FormElement
          label="Technologies Used"
          type="text"
          name="technologies-used"
          placeholder="e.g. React, Firebase, Git"
        />
        <div className={styles.description} id={styles.project_desc_container}>
          <label htmlFor="project-desc">Description</label>
          <textarea
            id="project-desc"
            placeholder="e.g. Implemented a secure payment gateway using Stripe API&#10;Integrated Firebase for user authentication"></textarea>
        </div>
        <button>Delete</button>
      </div>
    </>
  );
};

export default Projects;

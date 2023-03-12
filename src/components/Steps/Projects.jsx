import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Projects = () => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      <div className={`${styles.input_section} ${styles.card}`}>
        <FormElement
          formAttr={{
            type: 'text',
            name: 'project-name',
            placeholder: 'e.g. E-commerce Website',
          }}
          otherData={{ label: 'Project Name', category: 'projects' }}
        />
        <FormElement
          formAttr={{
            type: 'text',
            name: 'technologies-used',
            placeholder: 'e.g. React, Firebase, Git',
          }}
          otherData={{ label: 'Technologies Used', category: 'experience' }}
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

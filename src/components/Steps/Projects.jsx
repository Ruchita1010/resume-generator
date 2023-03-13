import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Projects = ({ projectCards, handleInputChange, addItem }) => {
  const newItem = { id: uuidv4(), name: '', technologies: '', description: '' };
  return (
    <>
      <div className={styles.add_btn_container}>
        <button onClick={() => addItem('projects', newItem)}>Add More</button>
      </div>
      {projectCards.map((projectCard) => (
        <div
          key={projectCard.id}
          className={`${styles.input_section} ${styles.card}`}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'name',
              placeholder: 'e.g. E-commerce Website',
              value: projectCard.name,
              handleInputChange,
            }}
            otherData={{
              label: 'Project Name',
              category: 'projects',
              id: projectCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'technologiesUsed',
              placeholder: 'e.g. React, Firebase, Git',
              value: projectCard.technologiesUsed,
              handleInputChange,
            }}
            otherData={{
              label: 'Technologies Used',
              category: 'experience',
              id: projectCard.id,
            }}
          />
          <div
            className={styles.description}
            id={styles.project_desc_container}>
            <label htmlFor="project-desc">Description</label>
            <textarea
              id="project-desc"
              placeholder="e.g. Implemented a secure payment gateway using Stripe API&#10;Integrated Firebase for user authentication"
              value={projectCard.description}
              onChange={(e) =>
                handleInputChange(e, 'description', 'projects', projectCard.id)
              }></textarea>
          </div>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Projects;

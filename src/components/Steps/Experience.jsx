import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Experience = ({ experienceCards, handleInputChange }) => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      {experienceCards.map((experienceCard) => (
        <div
          key={experienceCard.id}
          className={`${styles.input_section} ${styles.card}`}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'role',
              placeholder: 'e.g. Software Engineer',
              value: experienceCard.role,
              handleInputChange,
            }}
            otherData={{
              label: 'Role',
              category: 'experience',
              id: experienceCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'company',
              placeholder: 'e.g. Petflix',
              value: experienceCard.company,
              handleInputChange,
            }}
            otherData={{
              label: 'Company',
              category: 'experience',
              id: experienceCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'startDate',
              placeholder: 'e.g. May 2020',
              value: experienceCard.startDate,
              handleInputChange,
            }}
            otherData={{
              label: 'Start Date',
              category: 'experience',
              id: experienceCard.id,
            }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'endDate',
              placeholder: 'e.g. May 2023 or Present',
              value: experienceCard.endDate,
              handleInputChange,
            }}
            otherData={{
              label: 'End Date',
              category: 'experience',
              id: experienceCard.id,
            }}
          />
          <div
            className={styles.description}
            id={styles.experience_desc_container}>
            <label htmlFor="experience-desc">Description</label>
            <textarea
              id="experience-desc"
              name="description"
              placeholder="e.g. Designed RESTful APIs for data processing&#10;Implemented CI pipelines to improve software quality"
              value={experienceCard.description}
              onChange={(e) =>
                handleInputChange(
                  e,
                  'description',
                  'experience',
                  experienceCard.id
                )
              }></textarea>
          </div>
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Experience;

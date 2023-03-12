import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const Education = ({ educationCards, handleInputChange }) => {
  return (
    <>
      <div className={styles.add_btn_container}>
        <button>Add More</button>
      </div>
      {educationCards.map((educationCard, index) => (
        <div key={index} className={`${styles.input_section} ${styles.card}`}>
          <FormElement
            formAttr={{
              type: 'text',
              name: 'degree',
              placeholder: 'e.g. B.S. in Computer Science',
              value: educationCard.degree,
              handleInputChange,
            }}
            otherData={{ label: 'Degree', category: 'education', index }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'university',
              placeholder: 'e.g. Penn State University',
              value: educationCard.university,
              handleInputChange,
            }}
            otherData={{ label: 'University', category: 'education', index }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'startDate',
              placeholder: 'e.g. September 2012',
              value: educationCard.startDate,
              handleInputChange,
            }}
            otherData={{ label: 'Start Date', category: 'education', index }}
          />
          <FormElement
            formAttr={{
              type: 'text',
              name: 'endDate',
              placeholder: 'e.g. May 2016 or Present',
              value: educationCard.endDate,
              handleInputChange,
            }}
            otherData={{ label: 'End Date', category: 'education', index }}
          />
          <button>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Education;

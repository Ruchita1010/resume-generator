import React from 'react';
import styles from '../styles/FormElement.module.css';

const FormElement = ({ formAttr, otherData }) => {
  const { type, name, placeholder, value, handleInputChange } = formAttr;
  const { label, category, id = null } = otherData;
  // to stop overflowing of the delete button in skill
  const classSkillFormElement =
    category === 'skills' ? styles.skill_form_element : '';
  return (
    <div className={`${styles.form_element} ${classSkillFormElement}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e, name, category, id)}
      />
    </div>
  );
};

export default FormElement;

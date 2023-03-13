import React from 'react';
import styles from '../styles/FormElement.module.css';

const FormElement = ({ formAttr, otherData }) => {
  const { type, name, placeholder, value, handleInputChange } = formAttr;
  const { label, category, id = null } = otherData;
  return (
    <div className={styles.form_element}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e, name, category, id)}
      />
    </div>
  );
};

export default FormElement;

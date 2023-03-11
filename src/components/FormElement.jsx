import React from 'react';
import styles from '../styles/FormElement.module.css';

const FormElement = ({ label, type, name, placeholder }) => {
  return (
    <div className={styles.form_element}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

export default FormElement;

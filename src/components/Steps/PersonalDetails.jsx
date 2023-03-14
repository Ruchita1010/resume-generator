import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const PersonalDetails = ({ personalDetails, handleInputChange }) => {
  const { firstName, lastName, email, phoneNumber, linkedin, github, website } =
    personalDetails;

  return (
    <div className={styles.input_section}>
      <FormElement
        formAttr={{
          type: 'text',
          name: 'firstName',
          placeholder: 'e.g. Charlie',
          value: firstName,
          handleInputChange,
        }}
        otherData={{ label: 'First Name', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'lastName',
          placeholder: 'e.g. Kelmeckis',
          value: lastName,
          handleInputChange,
        }}
        otherData={{ label: 'Last Name', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'email',
          placeholder: 'e.g. wallflower24@gmail.com',
          value: email,
          handleInputChange,
        }}
        otherData={{ label: 'Email', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'phoneNumber',
          placeholder: 'e.g. 000-123-4567',
          value: phoneNumber,
          handleInputChange,
        }}
        otherData={{ label: 'Phone Number', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'linkedin',
          placeholder: 'e.g. charlie-kelmeckis',
          value: linkedin,
          handleInputChange,
        }}
        otherData={{ label: 'LinkedIn', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'github',
          placeholder: 'e.g. wallflower24',
          value: github,
          handleInputChange,
        }}
        otherData={{ label: 'GitHub', category: 'personalDetails' }}
      />
      <FormElement
        formAttr={{
          type: 'text',
          name: 'website',
          placeholder: 'e.g. wallflower.me',
          value: website,
          handleInputChange,
        }}
        otherData={{ label: 'Website', category: 'personalDetails' }}
      />
    </div>
  );
};

export default PersonalDetails;

import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepStyles.module.css';

const PersonalDetails = ({ personalDetails, handleInputChange }) => {
  const { firstName, lastName, email, phoneNumber, linkedin, github, website } =
    personalDetails;

  return (
    <div className={styles.input_section}>
      <FormElement
        label="First Name"
        type="text"
        name="firstName"
        placeholder="e.g. Charlie"
        data={{ value: firstName, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="e.g. Kelmeckis"
        data={{ value: lastName, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="Email"
        type="email"
        name="email"
        placeholder="e.g. wallflower24@gmail.com"
        data={{ value: email, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="Phone Number"
        type="text"
        name="phoneNumber"
        placeholder="e.g. 000-123-4567"
        data={{ value: phoneNumber, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="LinkedIn"
        type="text"
        name="linkedin"
        placeholder="e.g. linkedin/in/charlie-kelmeckis"
        data={{ value: linkedin, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="Github"
        type="text"
        name="github"
        placeholder="e.g. github/wallflower24"
        data={{ value: github, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
      <FormElement
        label="Website"
        type="text"
        name="website"
        placeholder="e.g. wallflower.me"
        data={{ value: website, category: 'personalDetails' }}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default PersonalDetails;

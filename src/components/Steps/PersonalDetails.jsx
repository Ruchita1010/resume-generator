import React from 'react';
import FormElement from '../FormElement';
import styles from '../../styles/stepUtils.module.css';

const PersonalDetails = () => {
  return (
    <div className={styles.input_section}>
      <FormElement
        label="First Name"
        type="text"
        name="first-name"
        placeholder="e.g. Charlie"
      />
      <FormElement
        label="Last Name"
        type="text"
        name="last-name"
        placeholder="e.g. Kelmeckis"
      />
      <FormElement
        label="Email"
        type="email"
        name="email"
        placeholder="e.g. wallflower24@gmail.com"
      />
      <FormElement
        label="Phone Number"
        type="text"
        name="phone-number"
        placeholder="e.g. 000-123-4567"
      />
      <FormElement
        label="LinkedIn"
        type="text"
        name="linkedin"
        placeholder="e.g. linkedin/in/charlie-kelmeckis"
      />
      <FormElement
        label="Github"
        type="text"
        name="github"
        placeholder="e.g. github/wallflower24"
      />
      <FormElement
        label="Website"
        type="text"
        name="website"
        placeholder="e.g. wallflower.me"
      />
    </div>
  );
};

export default PersonalDetails;

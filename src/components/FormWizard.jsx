import React, { useState } from 'react';
import StepSwitcher from './StepSwitcher';
import Stepper from './Stepper';
import styles from '../styles/FormWizard.module.css';

const FormWizard = ({ user, handleInputChange, addItem, deleteItem }) => {
  const [step, setStep] = useState(0);

  const handleStepChange = (e) => {
    setStep(parseInt(e.target.id));
  };

  return (
    <div className={styles.progressive_form_container}>
      <Stepper handleStepChange={handleStepChange} />
      <StepSwitcher
        step={step}
        user={user}
        handleInputChange={handleInputChange}
        addItem={addItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default FormWizard;

import React from 'react';
import styles from '../styles/Stepper.module.css';

const Stepper = ({ handleStepChange }) => {
  // names as per material icon
  const steps = ['person', 'school', 'build', 'work', 'draft'];
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        // !using index as key bcoz the list is static
        <div key={index} className={styles.step}>
          <div
            id={index}
            className={styles.step_item}
            onClick={handleStepChange}>
            <span className="material-symbols-outlined">{step}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

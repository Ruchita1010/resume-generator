import React, { Component } from 'react';
import styles from '../styles/Stepper.module.css';

class Stepper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
              onClick={this.props.handleStepChange}>
              <span className="material-symbols-outlined">{step}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Stepper;

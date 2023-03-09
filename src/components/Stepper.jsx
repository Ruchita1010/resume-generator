import React, { Component } from 'react';
import '../styles/stepper.css';

class Stepper extends Component {
  render() {
    // names as per material icon
    const steps = ['person', 'school', 'build', 'work', 'draft'];
    return (
      <div className="stepper">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <div className="step-item">
              <span className="material-symbols-outlined">{step}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Stepper;

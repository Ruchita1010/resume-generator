import React, { Component } from 'react';
import StepSwitcher from './StepSwitcher';
import Stepper from './Stepper';

class FormWizard extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };
  }

  handleStepChange = (e) => {
    this.setState({
      step: parseInt(e.target.id),
    });
  };

  render() {
    return (
      <div className="progressive-form-container">
        <Stepper handleStepChange={this.handleStepChange} />
        <StepSwitcher step={this.state.step} />
      </div>
    );
  }
}

export default FormWizard;

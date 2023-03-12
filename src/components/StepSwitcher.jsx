import React from 'react';
import Education from './Steps/Education';
import Experience from './Steps/Experience';
import PersonalDetails from './Steps/PersonalDetails';
import Projects from './Steps/Projects';
import Skills from './Steps/Skills';

const StepSwitcher = ({ step, user, handleInputChange }) => {
  const { personalDetails, education } = user;
  switch (step) {
    case 0:
      return (
        <PersonalDetails
          personalDetails={personalDetails}
          handleInputChange={handleInputChange}
        />
      );
    case 1:
      return (
        <Education
          educationCards={education}
          handleInputChange={handleInputChange}
        />
      );
    case 2:
      return <Skills />;
    case 3:
      return <Experience />;
    case 4:
      return <Projects />;
    default:
      return <PersonalDetails />;
  }
};

export default StepSwitcher;

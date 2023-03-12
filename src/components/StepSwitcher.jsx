import React from 'react';
import Education from './Steps/Education';
import Experience from './Steps/Experience';
import PersonalDetails from './Steps/PersonalDetails';
import Projects from './Steps/Projects';
import Skills from './Steps/Skills';

const StepSwitcher = ({ step, user, handleInputChange }) => {
  const { personalDetails, education, skills, experience, projects } = user;
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
      return <Skills skills={skills} handleInputChange={handleInputChange} />;
    case 3:
      return (
        <Experience
          experienceCards={experience}
          handleInputChange={handleInputChange}
        />
      );
    case 4:
      return (
        <Projects
          projectCards={projects}
          handleInputChange={handleInputChange}
        />
      );
    default:
      return <PersonalDetails />;
  }
};

export default StepSwitcher;

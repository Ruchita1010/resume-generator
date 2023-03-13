import React from 'react';
import Education from './Steps/Education';
import Experience from './Steps/Experience';
import PersonalDetails from './Steps/PersonalDetails';
import Projects from './Steps/Projects';
import Skills from './Steps/Skills';

const StepSwitcher = ({ step, user, handleInputChange, addItem }) => {
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
          addItem={addItem}
        />
      );
    case 2:
      return (
        <Skills
          skills={skills}
          handleInputChange={handleInputChange}
          addItem={addItem}
        />
      );
    case 3:
      return (
        <Experience
          experienceCards={experience}
          handleInputChange={handleInputChange}
          addItem={addItem}
        />
      );
    case 4:
      return (
        <Projects
          projectCards={projects}
          handleInputChange={handleInputChange}
          addItem={addItem}
        />
      );
    default:
      return <PersonalDetails />;
  }
};

export default StepSwitcher;

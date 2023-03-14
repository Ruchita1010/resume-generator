import React from 'react';
import PersonalDetails from './Previews/PersonalDetails';
import Education from './Previews/Education';
import styles from '../styles/Preview.module.css';
import Skills from './Previews/Skills';
import Experience from './Previews/Experience';
import Projects from './Previews/Projects';

const Preview = (props) => {
  const { personalDetails, education, skills, experience, projects } =
    props.user;
  return (
    <div className={styles.preview}>
      <PersonalDetails personalDetails={personalDetails} />
      <Education education={education} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Projects projects={projects} />
    </div>
  );
};

export default Preview;

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../styles/Preview.module.css';

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className={styles.section}>
      <p className={styles.section_title}>PROJECTS</p>
      <div className={`${styles.section_content}`}>
        {projects.map((item) => (
          <div key={item.id}>
            <div className={styles.project_header}>
              <p className={styles.bold_styling}>{item.name} | </p>
              <p className={styles.italic_styling}>
                &nbsp;{item.technologiesUsed}
              </p>
            </div>
            <ul className={styles.description}>
              {item.description.split('\n').map((listItem) => {
                if (listItem !== '') {
                  return <li key={uuidv4()}>{listItem}</li>;
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../styles/Preview.module.css';

const Projects = (props) => {
  const { projects } = props;
  return (
    <div className={styles.section}>
      <p className={styles.section_title}>PROJECTS</p>
      <div className={`${styles.section_content} ${styles.projects_preview}`}>
        {projects.map((item) => (
          <div key={item.id}>
            <div className={styles.project_header}>
              <p className={styles.project_name}>{item.name} | </p>
              <p className={styles.project_technologies}>
                &nbsp;{item.technologiesUsed}
              </p>
            </div>
            <ul className={styles.project_description}>
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

import React from 'react';
import styles from '../../styles/Experience.module.scss';

const Experience = ({ experience }) => {
  return (
    <div className={`${styles.row} ${styles.experience}`}>
      <div>
        <img src={experience.company_logo} alt="geeklama" />
      </div>
      <div>
        <h4 className={styles.jobtitle}>
          {experience.position} @{' '}
          <a href={experience.company_url}>{experience.company}</a>
        </h4>
        <p>{experience.period}</p>
        <ul>
          {experience.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <div className={styles.tags}>
          {experience.tags.map((tag) => (
            <span key={tag} className={styles.badge}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

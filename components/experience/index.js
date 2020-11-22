import React, { useEffect, useState } from 'react';
import Experience from './Experience';
import styles from '../../styles/Experience.module.scss';
import data from '../../data/experiences.json';

const WorkExperiences = () => {
  const [activeId, setActiveId] = useState(0);
  const [job, setJob] = useState(null);

  useEffect(() => {
    setJob(data.data[activeId]);
    switchExperience(activeId);
  }, [activeId]);

  const switchExperience = (index) => {
    setActiveId(index);
    setJob(data.data[index]);
  };

  return (
    <div>
      <div className={styles.tab}>
        <ul>
          {data.data.map((exp, index) => (
            <li
              onClick={() => switchExperience(index)}
              className={activeId === index ? styles.active : null}
              key={exp.id}
            >
              {exp.company}
            </li>
          ))}
        </ul>
      </div>
      {job && <Experience experience={job} />}
    </div>
  );
};

export default WorkExperiences;

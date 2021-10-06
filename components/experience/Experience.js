import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="flex flex-col transition-all duration-75 ease-in justify-center items-center">
      <div>
        <h4 className="text-2xl font-semibold">
          {experience.position} @{' '}
          <a href={experience.company_url}>{experience.company}</a>
        </h4>
        <p className="text-2xl font-medium my-1">{experience.period}</p>
        <ul>
          {experience.tasks.map((task) => (
            <li className="text-lg md:text-xl font-light" key={task}>
              {task}
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center flex-wrap">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="p-1 m-2 border border-black bg-white font-light text-base"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

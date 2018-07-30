import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectDemos from './ProjectDemos';
import ProjectHeading from './ProjectHeading';

const Project = ({
  name = '',
  tools = [],
  demos = [],
  github,
  achievements,
}) => {
  const items = isEmpty(demos) ? achievements : [
    ...achievements, <ProjectDemos data={demos} />,
  ];
  return (
    <div style={style.main}>
      <ProjectHeading name={name} tools={tools} github={github}/>
      {
        <ul style={style.list}>
          {
            items.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                </li>
              );
            })
          }
        </ul>
      }
    </div>
  );
};

function isEmpty(array) {
  return array.length === 0;
}

const style = {
  main: {
    margin: '1rem 0',
  },
  list: {
    margin: 0,
    paddingLeft: '2rem',
  },
};

Project.propTypes = {
  name: PropTypes.string,
  github: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.string),
  achievements: PropTypes.array.isRequired,
  demos: PropTypes.arrayOf(PropTypes.string),
};

export default Project;

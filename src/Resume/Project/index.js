import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectLinks from './ProjectLinks';
import ProjectHeading from './ProjectHeading';

const Project = ({ name, tools, links = [], achievements }) => {
  const items = isEmpty(links) ? achievements : [
    ...achievements, <ProjectLinks data={links} />,
  ];
  return (
    <div style={style.main}>
      <ProjectHeading name={name} tools={tools} />
      <List items={items} style={style.list}/>
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
  },
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.array.isRequired,
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Project;

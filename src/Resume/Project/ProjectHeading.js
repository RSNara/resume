import React, { PropTypes } from 'react';
import { Icon } from 'react-fa';
import Radium from 'radium';

const ProjectHeading = ({
  name,
  tools,
  github,
}) => {
  return (
    <div style={style.main}>
      <ProjectName github={github} name={name} />
      <div style={style.tools}>
        {tools.join(', ')}
      </div>
    </div>
  );
};

const ProjectName = ({ github, name }) => {
  if (github) {
    return (
      <a href={github} style={style.name}>
        <Icon name="github" style={{ paddingRight: '0.5rem' }}/>
        {name}
      </a>
    );
  }

  return (
    <div style={style.name}>
      {name}
    </div>
  );
};

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '0.4rem',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  tools: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: 'rgba(77, 100, 141, 0.75)',
  },
};

ProjectHeading.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(ProjectHeading);

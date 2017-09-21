import React, { PropTypes } from 'react';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        {name}
      </h1>
      <h3 style={style.h3}>
        {term} {nickname}
      </h3>
    </section>
  );
};

const style = {
  main: {
    padding: '0 0 0.5rem 0',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  h1: {
    fontSize: '2.5rem',
  },
  h3: {
    fontSize: '1.75rem',
    marginBottom: '0.5rem',
    color: 'rgba(0,0,0,0.7)',
  },
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;

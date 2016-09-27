import React, { PropTypes } from 'react';
import * as C from '../constant/index';

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
    padding: '2rem 2rem 2rem 0',
    backgroundColor: C.COLORS.PRIMARY(),
    color: 'white',
  },
  h1: {
    fontSize: '175%',
    textAlign: 'right',
    fontWeight: 'bolder',
  },
  h3: {
    textAlign: 'right',
  },
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;

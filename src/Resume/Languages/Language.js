import React, { PropTypes } from 'react';
import Logo from '../../ui/Logo';

const Language = ({ name, logo }) => (
  <div style={style.main}>
    <div/>
    <div style={style.content}>
      {name} {logo ? <Logo src={logo}/> : null}
    </div>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
};

Language.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

export default Language;

import React, { PropTypes } from 'react';

const Language = ({ name, logo }) => (
  <div style={style.main}>
    <div/>
    <div style={style.content}>
      {name} {logo ? <Logo src={logo}/> : null}
    </div>
  </div>
);

const Logo = ({ src }) => {
  return (
    <img
      style={style.logo}
      src={src}/>
  );
};

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginLeft: '0.25em',
    height: '1em',
    width: '1em',
  },
};

Language.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

export default Language;

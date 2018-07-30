import React from 'react';

const Logo = ({ src }) => {
  return (
    <img
      style={style}
      src={src}/>
  );
};

const style = {
  marginLeft: '0.25em',
  height: '1em',
  width: '1em',
};

export default Logo;

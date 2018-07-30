import React, { PropTypes } from 'react';

const Link = ({ to, children, style }) => {
  return (
    <a href={to} style={{
      ...defaultStyle,
      ...style,
    }}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
};

const defaultStyle = {
  padding: 0,
  textDecoration: 'none',
};

export default Link;

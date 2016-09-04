import React, { PropTypes } from 'react';
import radium from 'radium';

const Container = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const width = 1100;
const height = 11 / 8.5 * width;

const style = {
  width: `${width}px`,
  height: `${height}px`,
  margin: '0 auto',
  fontFamily: '\'Open Sans\', sans-serif',
  display: 'flex',
};

export default radium(Container);

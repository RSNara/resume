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

const style = {
  width: '8.5in',
  height: '11in',
  margin: '0 auto',
  display: 'flex',
  backgroundColor: 'white',
};

export default radium(Container);

import React, { PropTypes } from 'react';

const SidebarHeading = ({ children, align = 'right' }) => (
  <h1 style={{
    ...style,
    textAlign: align,
  }}>
    {children}
  </h1>
);

const style = {
  padding: '0.25rem 0',
  fontWeight: 'bold',
};

SidebarHeading.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
};

export default SidebarHeading;

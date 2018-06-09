import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ university, duration, degree }) => (
  <section style={style.main}>
    <SidebarHeading align="right">Education</SidebarHeading>
    <div style={{
      ...style.text,
    }}>{degree}</div>
    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>{university}</div>
    <div style={style.text}>{duration}</div>
  </section>
);

const style = {
  main: {
    margin: '1.5rem 0 0 0',
  },
  text: {
    textAlign: 'right',
  },
};

Education.propTypes = {
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default Education;

import React, { PropTypes } from 'react';

const Section = ({
  color,
  heading,
  subheading,
  children,
}) => {
  const display = heading && subheading ? 'block' : 'none';
  return (
    <div>
      <div style={{ display }}>
        <div style={{
          ...defaultStyles.main,
          backgroundColor: color,
        }}>
          <div style={defaultStyles.heading}>
            {heading}
          </div>
          <div style={defaultStyles.subheading}>
            {subheading}
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '0.1px solid ' + color,
        borderLeft: '0.5rem solid ' + color,
        backgroundColor: 'rgba(118, 136, 169, 0.05)',
        marginBottom: '1rem',
        padding: '0.025rem 1.2rem',
      }}>
        {children}
      </div>
    </div>
  );
};

const defaultStyles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '0.75rem',
    paddingLeft: '0.5rem',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    padding: '0.25rem',
  },
  subheading: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.75)',
    padding: '0.25rem',
  },
};

Section.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;

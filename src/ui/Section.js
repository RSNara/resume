import React, { PropTypes } from 'react';
import tinycolor from 'tinycolor2';

const Section = ({
  color,
  heading,
  subheading,
  children,
}) => {
  const display = heading && subheading ? 'block' : 'none';
  return (
    <div style={{
      paddingBottom: '1rem',
    }}>
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
        borderLeft: '0.25rem solid ' + color,
        backgroundColor: tinycolor(color).lighten(56),
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
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
  },
  subheading: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.95)',
    fontWeight: 'bold',
  },
};

Section.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;

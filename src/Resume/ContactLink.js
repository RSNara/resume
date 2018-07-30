import React, { PropTypes } from 'react';
import Link from '../ui/Link';
import { Icon } from 'react-fa';

const ContactLink = ({
  display,
  name,
  link,
  icon,
}) => {
  return (
    <div style={style.main}>
      {/* <span style={style.name}>{name}: </span> */}
      <div style={{
        minWidth: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        }}>
        <Icon name={icon} size="lg"/>
      </div>
      <Link to={link}>
        {display}
      </Link>
      {/* <div style={{
        minWidth: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '0.5rem',
        }}>
        <Icon name={icon} size="lg"/>
      </div> */}
    </div>
  );
};

const style = {
  main: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    paddingRight: '0.5rem',
  },
};

ContactLink.propTypes = {
  display: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactLink;

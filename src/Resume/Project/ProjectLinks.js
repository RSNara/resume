import React, { PropTypes } from 'react';
import Link from '../../ui/Link';

const ProjectLinks = ({ data: links }) => (
  <span>
     <span style={style.title}>Links</span>: {
      links.map((link, index) => (
        <Link style={style.link} key={index} to={link}>
          {link}{index === links.length - 1 ? '' : ';' }
        </Link>
      ))
    }
  </span>
);

const style = {
  link: {
    padding: '0 4px',
  },
  title: {
    fontWeight: 'bold',
  },
};

ProjectLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectLinks;

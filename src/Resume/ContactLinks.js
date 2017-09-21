import React, { PropTypes } from 'react';
import ContactLink from './ContactLink';
import SidebarHeading from './SidebarHeading';

const ContactLinks = ({ data: links }) => (
  <section style={style.main}>
    <SidebarHeading>Contact</SidebarHeading>
    {
      links.map((link, key) => (
        <ContactLink
          display={link.display}
          key={key}
          link={link.link}
          name={link.name}
          icon={link.icon}
        />
      ))
    }
  </section>
);

const style = {
  main: {
    // margin: '0 0 2rem',
  },
  heading: {
    textAlign: 'left',
    display: 'none',
  },
};

ContactLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactLinks;

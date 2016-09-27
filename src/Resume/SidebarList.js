import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const SidebarList = ({ items, title }) => (
  <section style={style.main}>
    <SidebarHeading> {title} </SidebarHeading>
    <div style={style.list}>
      {items.map((item, key) => (
        <span key={key}>
          {item + createSeparator(key, items)}
        </span>
      ))}
    </div>
  </section>
);

function createSeparator(index, array) {
  if (index < array.length - 1) {
    return ', ';
  }

  return '';
}

const style = {
  main: {
    margin: '2rem 0',
  },
  list: {
    breakWord: 'normal',
    textAlign: 'right',
    // textJustify: 'inter-word',
  },
};

SidebarList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarList;

import React, { PropTypes } from 'react';
import Language from './Language';
import SidebarHeading from '../SidebarHeading';

const Languages = ({ data: languages }) => (
  <section style={style.main}>
    <SidebarHeading>Languages</SidebarHeading>
    <div>
      {sortLanguages(languages).map((language, index) => (
        <Language
          name={language.name}
          proficiency={language.proficiency}
          key={index} />
      ))}
    </div>
  </section>
);

const style = {
  main: {
    margin: '1rem 0',
  },
};

function sortLanguages(langs) {
  return langs.sort((a, b) => b.proficiency - a.proficiency);
}

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Languages;

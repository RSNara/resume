import React, { PropTypes } from 'react';
import Languages from './Languages';
import SidebarList from './SidebarList';
import ContactLinks from './ContactLinks';
import Education from './Education';
import * as Constant from '../constant';

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <div style={style.info}>
      <div>
        <ContactLinks data={data.links} />
        <Languages data={data.languages} />
        <SidebarList title="Libraries" items={data.libraries} />
        <SidebarList title="Frameworks" items={data.frameworks} />
        <SidebarList title="Tools" items={data.tools} />
      </div>
      <div>
        <Education
          degree={data.education.degree}
          university={data.education.university}
          duration={data.education.duration} />
      </div>
    </div>
  </section>
);

const style = {
  main: {
    width: '2.5in',
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(5, 24, 56)',
    padding: '2.5rem 1.5rem',
    backgroundColor: Constant.COLORS.SECONDARY().lighten(20),
    lineHeight: '1.5',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: '1',
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;

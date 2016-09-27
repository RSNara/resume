import React, { PropTypes } from 'react';
import Identity from './Identity';
import Languages from './Languages';
import SidebarList from './SidebarList';
import ContactLinks from './ContactLinks';
import HorizontalRule from '../ui/HorizontalRule';
import Education from './Education';
import * as Constant from '../constant';

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <Identity name={data.name} program={data.program} />
    <div style={style.info}>
      <div>
        {/* <HorizontalRule /> */}
        <ContactLinks data={data.links} />
        {/* <HorizontalRule /> */}
        <Languages data={data.languages} />
        <SidebarList title="Libraries" items={data.libraries} />
        <SidebarList title="Frameworks" items={data.frameworks} />
        <SidebarList title="Tools" items={data.tools} />
        {/* <HorizontalRule /> */}
      </div>
      <div>
        <Education
          university={data.education.university}
          duration={data.education.duration} />
      </div>
    </div>
  </section>
);

const style = {
  main: {
    width: '27.5%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Constant.COLORS.SECONDARY().lighten(20),
    color: 'rgb(5, 24, 56)',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    flexGrow: '1',
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;

import React, { PropTypes } from 'react';
import MainHeading from './MainHeading';
import Project from './Project';
import Section from '../ui/Section';
import * as Constant from '../constant';
import Identity from './Identity';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ companies, projects, name, program }) => (
  <section style={style.main}>
    <Identity name={name} program={program} />
    {
      companies.map((company, i) => {
        return (
          <Section heading={`${company.name}`} subheading={`${company.title} | ${company.range}`} color={Constant.COLORS.PRIMARY().toString()} key={i}>
            {
              (company.projects || []).map((project, j) => {
                return (
                  <Project
                    name={project.name}
                    tools={project.tools}
                    achievements={project.achievements}
                    demos={project.demos}
                    github={project.github}
                    key={j}
                  />
                );
              })
            }
          </Section>
        );
      })
    }
    <MainHeading title="Projects" />
    {
      projects.map((project, i) => (
        <Section color={Constant.COLORS.PRIMARY().toString()} key={i}>
          <Project
            name={project.name}
            tools={project.tools}
            achievements={project.achievements}
            demos={project.demos}
            github={project.github}
            />
        </Section>
      ))
    }
  </section>
);

const style = {
  main: {
    padding: '2.5rem 1.25rem',
    // backgroundColor: '#FFF9FB',
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  program: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;

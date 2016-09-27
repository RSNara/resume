import React, { PropTypes } from 'react';
import MainHeading from './MainHeading';
import Project from './Project';
import Section from '../ui/Section';
import * as Constant from '../constant';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ companies, projects }) => (
  <section style={style.main}>
    <MainHeading title="Work Experience" />
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
    padding: '2rem 2rem 2rem 1.25rem',
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;

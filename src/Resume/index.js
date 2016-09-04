import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Sidebar data={DATA.sidebar} />
        <Main {...DATA.main} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    name: 'Ramanpreet Nara',
    program: {
      term: '3B',
      nickname: 'Software Engineering',
      name: 'Software Engineering',
    },
    education: {
      university: 'University of Waterloo',
      duration: 'Sept 13 - PRESENT',
    },
    languages: [{
      name: 'JavaScript',
      proficiency: 0.8,
    }, {
      name: 'Java',
      proficiency: 0.6,
    }, {
      name: 'C/C++',
      proficiency: 0.6,
    }, {
      name: 'HTML',
      proficiency: 0.75,
    }, {
      name: 'PHP',
      proficiency: 0.25,
    }, {
      name: 'CSS',
      proficiency: 0.6,
    }, {
      name: 'Clojure',
      proficiency: 0.7,
    }, {
      name: 'Assembly',
      proficiency: 0.6,
    }, {
      name: 'BASH',
      proficiency: 0.3,
    }],
    frameworks: [
      'Node.js',
      'Redux',
      'Express',
      'Koa',
      'Angular',
      'Ember',
      'Sails',
      'Scrum',
      'Mocha',
    ],
    libraries: [
      'React',
      'Ramda',
      'Immutable',
      'Chai',
      'Basscss',
    ],
    tools: [
      'Unix CLI',
      'Git',
      'Webpack',
      'MongoDB',
      'Gulp',
      'Broccoli',
      'Redis',
      'Puppet',
    ],
    links: [{
      name: 'Phone',
      display: '1-647-609-4290',
      link: 'tel:+16576094290',
    }, {
      name: 'Email',
      display: 'rsnara@uwaterloo.ca',
      link: 'mailto:rsnara@uwaterloo.ca',
    }, {
      name: 'GitHub',
      display: 'rsnara',
      link: 'https://github.com/rsnara',
    }],
  },
  main: {
    interests: [
      'Following technological advancements; scripting; digital art; Project Euler',
      'Over-engineering resumes using React.js',
    ],
    companies: [{
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      projects: [{
        name: 'Atlas',
        tools: ['React', 'Angular 1.4', 'Koa', 'Redux', 'Ramda', 'Basscss'],
        achievements: [
          'Migrated an Angular + TypeScript application into a React + Redux codebase',
          'Built the TimeOff tool to show managers employee vacation metrics',
          'Implemented a skills survey form to help managers make informed staffing decisions',
        ],
      }, {
        name: 'Mercatus',
        tools: ['Angular 1.5', 'Jasmine', 'LESS'],
        achievements: [
          'Worked in a team of 6 client developers over two months on a white-label product',
          'Helped migrate the Angular 1.5 app from an MVC to a component oriented architecture',
          'Refactored, and thoroughly tested the faceted search (front-end) implementation',
        ],
      }],
    }, {
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      projects: [{
        name: 'Sideboard',
        tools: ['React', 'Ramda', 'Immutable', 'Keen.io'],
        achievements: [
          'Built a Koa.js back-end to aggregate metrics from PivotalTracker APIs',
          'Coauthored a React + Redux front-end to display metrics, and styled it with Sass',
        ],
      }, {
        name: 'Atlas Old',
        tools: ['Angular 1.4', 'TypeScript', 'Express', 'Mocha', 'Chai'],
        achievements: [
          'Used ResourceGuru APIs to implement Rangle.io\'s vacation request form',
          'Decoupled, tested, and modularized spaghetti server code',
        ],
      }, {
        name: 'Livefyre HTML Embed',
        tools: ['JavaScript', 'Sass', 'DOM API', 'SVG', 'Webpack'],
        achievements: [
          'Implemented dependency-free cross-browser compatible SVG animations',
          'Unit tested code with Mocha + Chai, ensuring ~90% branch coverage',
        ],
      }],
    }, {
      name: 'Ntree',
      title: 'Angular JS Developer',
      projects: [{
        name: 'SalesTree',
        tools: ['JavaScript', 'Angular', 'Broccoli', 'Gulp'],
        achievements: [
          'Created services to monitor user activities and log client-side errors server-side',
          'Refactored client-side build infrastructure to reduce rebuild times by 75%+',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      projects: [{
        name: 'Projects:',
        tools: ['PHP', 'MySQL', 'Puppet', 'Symfony 2'],
        achievements: [
          'Setup exhaustive caching on the Premier\'s website to halve page load times',
          'Removed security holes in the shoddy auth. implementation of a legacy PHP app',
          'Authored Packer and Puppet scripts to automatically build VM images for 4 projects',
        ],
      }],
    }],
    projects: [{
      name: 'GLISP - The G LISP interpreter',
      tools: ['JavaScript', 'Immutable', 'AVA', 'Ramda', 'Rollup'],
      links: [],
      github: 'https://github.com/rsnara/glisp',
      achievements: [
        'A feature-rich, and isomorphic LISP implementation built with JavaScript',
        'Supports immutable data structures, JS interop, destructuring, and macros',
      ],
    }, {
      name: 'Reddit Client',
      tools: ['Reddit API', 'React', 'Redux', 'redux-saga', 'reselect'],
      links: ['https://rc-rsnara.herokuapp.com/r/pics/hot'],
      github: 'https://github.com/rsnara/reddit-client',
      achievements: [
        'A shameless Reddit clone built to experiment with the redux architecture',
        'Created a reddit-style comment tree, image previews, subreddits, and more',
      ],
    }],
  },
};

export default Resume;

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
      duration: 'Sept. 13 - PRESENT',
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
      name: 'HTML/CSS',
      proficiency: 0.75,
    }, {
      name: 'PHP',
      proficiency: 0.4,
    }, {
      name: 'Clojure',
      proficiency: 0.7,
    }, {
      name: 'Assembly',
      proficiency: 0.6,
    }, {
      name: 'BASH',
      proficiency: 0.4,
    }, {
      name: 'SQL',
      proficiency: 0.3,
    }],
    frameworks: [
      'Node.js',
      'Redux',
      'Express',
      'Koa.js',
      'Angular',
      'Ember',
      'Sails',
      'Scrum',
      'Mocha',
      'AVA',
    ],
    libraries: [
      'React',
      'Ramda',
      'Immutable',
      'Chai',
      'Basscss',
      'Lodash',
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
      icon: 'mobile',
    }, {
      name: 'Email',
      display: 'rsnara@uwaterloo.ca',
      link: 'mailto:rsnara@uwaterloo.ca',
      icon: 'envelope',
    }, {
      name: 'GitHub',
      display: 'github.com/rsnara',
      link: 'https://github.com/rsnara',
      icon: 'github',
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
      range: 'Spring 2016',
      projects: [{
        name: 'Atlas',
        tools: ['React', 'Angular 1.4', 'Koa', 'Redux', 'Ramda', 'Basscss'],
        achievements: [
          'Merged a TypeScript Angular MVC application into a React + Redux codebase',
          'Crafted efficient methods to crunch 3000+ ResourceGuru bookings into vacation metrics',
          'Developed REST APIs and a front-end to enable CRUD operations on developer skills',
        ],
      }, {
        name: 'Mercatus',
        tools: ['Angular 1.5', 'Jasmine', 'LESS'],
        achievements: [
          'Reinforced a team of 6 client devs (for 2 months) building a white-label e-commerce app',
          'Helped migrate an MVC Angular web application to a component-oriented architecture',
          'Refactored and tested the faceted search web front-end, ensuring 100% branch coverage',
        ],
      }],
    }, {
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      range: 'Fall 2015',
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
      range: 'Winter 2015',
      projects: [{
        name: 'SalesTree',
        tools: ['JavaScript', 'Angular', 'Broccoli', 'Gulp'],
        achievements: [
          'Setup facilities to monitor user activities and save client-side errors server-side',
          'Overhauled client-side build infrastructure to reduce rebuild times by over 75%',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      range: 'Spring 2014',
      projects: [{
        name: 'Projects:',
        tools: ['PHP', 'MySQL', 'Puppet', 'Symfony 2'],
        achievements: [
          'Improved caching, reducing page load times on the Premier\'s website\'s by over 50%',
          'Refactored authentication in a legacy PHP app to remove security vulnerabilities',
          'Authored Packer and Puppet scripts to automatically build VM images for 4 projects',
        ],
      }],
    }],
    projects: [{
      name: 'GLISP - The G LISP interpreter',
      tools: ['JavaScript', 'Immutable', 'AVA', 'Ramda', 'Rollup'],
      demos: [],
      github: 'https://github.com/rsnara/glisp',
      achievements: [
        'A feature-rich, and isomorphic LISP implementation built with JavaScript',
        'Supports immutable data structures, JS interop, destructuring, macros, and exceptions',
      ],
    }, {
      name: 'Reddit Client',
      tools: ['Reddit API', 'React', 'Redux', 'redux-saga', 'reselect'],
      demos: ['https://rc-rsnara.herokuapp.com/r/pics/hot'],
      github: 'https://github.com/rsnara/reddit-client',
      achievements: [
        'A Reddit clone built to experiment with the redux architecture',
        'Created a reddit-style comment tree, image previews, and multiple subreddits',
      ],
    }],
  },
};

export default Resume;

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
      term: '3A',
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
      name: 'C/C++',
      proficiency: 0.6,
    }, {
      name: 'HTML',
      proficiency: 0.75,
    }, {
      name: 'PHP',
      proficiency: 0.4,
    }, {
      name: 'CSS',
      proficiency: 0.6,
    }, {
      name: 'Clojure',
      proficiency: 0.4,
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
      'PivotalTracker',
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
      name: 'CodePen',
      display: 'codepen.io/rsnara',
      link: 'http://codepen.io/rsnara',
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
      color: 'rgb(77, 100, 141)',
      title: 'Full Stack JavaScript Developer',
      projects: [{
        name: 'Sideboard',
        tools: ['ECMAScript 2015', 'Ramda', 'Immutable', 'Keen.io'],
        achievements: [
          'Wrote a back-end using Koa to aggregate metrics from PivotalTracker APIs',
          'Coauthored a React + Redux front-end; styled it using Sass',
          'Authored the spam-url npm module to test back-end against request flooding',
        ],
      }, {
        name: 'Project Augury',
        tools: ['TypeScript', 'Express', 'Mocha', 'Chai'],
        achievements: [
          'Used ResourceGuru APIs to implement Rangle.io\'s Vacation Request Form',
          'Decoupled, tested, and modularized spaghetti server code',
        ],
      }, {
        name: 'Livefyre HTML Embed',
        tools: ['ECMAScript 2015', 'Sass', 'DOM API', 'SVG', 'Webpack'],
        achievements: [
          'Implemented cross-browser compatible SVG animations',
          'Unit Tested with Mocha + Chai; used Istanbul to ensure ~90% coverage',
        ],
      }],
    }, {
      name: 'Ntree',
      title: 'Angular JS Developer',
      color: 'rgb(77, 100, 141)',
      projects: [{
        name: 'SalesTree',
        tools: ['ECMAScript 2015', 'Angular', 'Broccoli', 'Gulp', 'Bootstrap'],
        achievements: [
          'Developed a responsive tablet UI with Angular, Bootstrap, and LESS',
          'Created services to monitor user activities and log client-side errors server-side',
          'Recreated client-side build infrastructure using Broccoli, cutting app rebuild time by more than 75%',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      color: 'rgb(77, 100, 141)',
      achievements: [
        'Setup exhaustive caching on the Premier\'s website, reducing load times by 50%',
        'Reimplemented the back-end for the Orientation website',
        'Wrote configuration scripts using Packer and Puppet to auto-generate VMs for various production apps',
      ],
    }],
    projects: [{
      name: 'LOLQueen - League of Legends',
      tools: ['Redux', 'Radium', 'Immutable', 'Basscss', 'Ramda', 'Redis'],
      links: ['http://lolqueen.net', 'https://github.com/LOLQueen'],
      github: 'https://github.com/LOLQueen',
      achievements: [
        'Authored utilities to query RIOT APIs, which seamlessly handle rate limiting',
        'Built a React + Redux front-end to display Summoner match history',
      ],
    }, {
      name: 'CVAS - HTML5 Canvas Hack',
      tools: ['Socket.io', 'Express'],
      links: ['http://cvas.herokuapp.com'],
      achievements: [
        'Used message passing to keep canvas state efficiently in sync between users',
      ],
    }],
  },
};

export default Resume;

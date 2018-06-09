import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import CLJSLogo from './images/cljs.svg';
import JSLogo from './images/js.svg';
import HackLogo from './images/hack.svg';
import HTMLLogo from './images/html.svg';
import CSSLogo from './images/css.svg';
import JavaLogo from './images/java.svg';
import CPPLogo from './images/cpp.svg';
import SQLLogo from './images/postgres.svg';

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
    education: {
      university: 'University of Waterloo',
      degree: 'Bachelor of Software Engineering (B.SE.)',
      duration: 'Sept. 13 - Apr. 18',
    },
    languages: [{
      name: 'JavaScript',
      proficiency: 0.8,
      logo: JSLogo,
    }, {
      name: 'Java',
      proficiency: 0.6,
      logo: JavaLogo,
    }, {
      name: 'C++',
      proficiency: 0.6,
      logo: CPPLogo,
    }, {
      name: 'HTML',
      proficiency: 0.65,
      logo: HTMLLogo,
    }, {
      name: 'CSS',
      proficiency: 0.65,
      logo: CSSLogo,
    }, {
      name: 'Hack',
      proficiency: 0.7,
      logo: HackLogo,
    }, {
      name: 'ClojureScript',
      proficiency: 0.75,
      logo: CLJSLogo,
    }, {
      name: 'SQL',
      proficiency: 0.7,
      logo: SQLLogo,
    }],
    frameworks: [
      'Re-frame',
      'Node.js',
      'Redux',
      'Express',
      'Koa.js',
      'AngularJS',
      'Scrum',
      'AVA',
    ],
    libraries: [
      'React',
      'Ramda',
      'Immutable',
      'XHP',
      'Basscss',
      'Lodash',
      'Reagent',
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
    }, {
      name: 'LinkedIn',
      display: 'rsnara',
      link: 'https://linkedin.com/in/rsnara',
      icon: 'linkedin',
    }],
  },
  main: {
    name: 'Ramanpreet Nara',
    program: {
      term: '',
      nickname: '',
      name: 'Software Engineering',
    },
    interests: [
      'Following technological advancements; scripting; digital art; Project Euler',
      'Over-engineering resumes using React.js',
    ],
    companies: [{
      name: 'Facebook',
      title: 'Front-end Engineering Intern',
      range: 'Winter 2017, Fall 2017',
      projects: [{
        name: 'React Native',
        tools: ['Java', 'Objective-C', 'JavaScript'],
        achievements: [
          'Re-implemented and greatly improved border-rendering algorithm for Android',
          'Improved support for direction-aware styles across iOS and Android',
        ],
      }, {
        name: 'Interfaces: Web Core',
        tools: ['XHP', 'JavaScript', 'CSS', 'Hack'],
        achievements: [
          'Worked on a project to greatly improve video viewing experience on Facebook web',
          'Implemented and shipped animations for the HTML5 video player',
        ],
      }],
    }, {
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      range: 'Fall 2015, Spring 2016',
      projects: [{
        name: 'Team Sideboard',
        tools: ['React', 'Redux', 'Ramda', 'Immutable', 'Keen.io'],
        achievements: [
          'Co-authored Sideboard: A React front-end to PivotalTracker\'s APIs that computes and displays Scrum-related metrics relevant for Rangle.io teams',
        ],
      }, {
        name: 'Team Atlas',
        tools: ['React', 'Angular 1.4', 'Koa.js', 'Redux', 'Ramda', 'Basscss'],
        achievements: [
          'Developed the Angular 1.4 app used by Rangle.io to schedule staff to projects',
          'Helped re-architect and re-implement the Angular app, eventually merging it into Sideboard',
        ],
      }, {
        name: 'Mercatus',
        tools: ['Angular 1.5', 'Jasmine', 'LESS'],
        achievements: [
          'Did on-site consulting for a team of six client developers at Mercatus for over two months',
          'Rebuilt the faceted search front-end of their Angular 1.5 web e-commerce application built',
        ],
      }],
    }, {
      name: 'Ntree',
      title: 'Angular JS Developer',
      range: 'Winter 2015',
      projects: [{
        name: 'Team SalesTree',
        tools: ['JavaScript', 'Angular 1.2', 'Broccoli', 'Gulp'],
        achievements: [
          'Setup infrastructure to track user interactions and save client-side errors server-side',
          'Re-implemented client-side build infrastructure to significantly reduce JavaScript rebuild times',
        ],
      }],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      range: 'Spring 2014',
      projects: [{
        name: 'Accomplishments:',
        tools: ['PHP', 'MySQL', 'Vagrant', 'Puppet', 'Symfony 2'],
        achievements: [
          'Leveraged caching with Symfony2 to halve page load times on the Premier\'s website',
          'Refactored a legacy PHP app to remove security vulnerabilities with its authentication',
          'Authored Packer and Puppet scripts to automatically build Vagrant VM images for four projects',
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
    }, {
      name: 'play-cljs',
      tools: ['ClojureScript', 'p5.js', 'boot'],
      demos: ['https://github.com/oakes/play-cljs-examples'],
      github: 'https://github.com/oakes/play-cljs',
      achievements: [
        'Corrected the image scaling algorithm in this ClojureScript game library',
        'Built the image transforms :flip-x and :flip-y, making it easier to reuse images for animations',
      ],
    }],
  },
};

export default Resume;

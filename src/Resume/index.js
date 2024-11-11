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
import KotlinLogo from './images/kotlin.svg';
import Link from '../ui/Link';

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
      proficiency: 0.7,
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
    }, {
      name: 'Kotlin',
      proficiency: 0.7,
      logo: KotlinLogo
    }],
    frameworks: [
      'Re-frame',
      'Node.js',
      'Redux',
      'Express',
      'Koa',
      'AngularJS',
      'Scrum',
      'AVA',
      'Spec',
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
      display: '650-561-5687',
      link: 'tel:+16505615687',
      icon: 'phone',
    }, {
      name: 'Email',
      display: 'ramanpreetnara@gmail.com',
      link: 'mailto:ramanpreetnara@gmail.com',
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
      name: 'Meta Inc.',
      title: 'Front-end Engineer',
      range: 'July 2018, Present',
      projects: [{
        name: 'React Native',
        tools: ['Java', 'Objective-C', 'JavaScript', 'Flipper'],
        achievements: [
          <span>Open-sourced jsi: React Native's c++ api for JavaScript VMs</span>,
          <span>Productionized React Native's <i>new</i> NativeModule system</span>,
          <span>Productionized React Native's <i>new</i> runtime (leading two others)</span>,
          <span>Lead workstream to develop New Architecture backwards compatibility layers</span>,
          <span>Supported New Architecture migration for 30+ internal VR panel apps</span>,
        ],
      }],
    },{
      name: 'Facebook Inc.',
      title: 'Front-end Engineering Intern',
      range: 'Winter 2017, Fall 2017',
      projects: [{
        name: 'React Native',
        tools: ['Java', 'Objective-C', 'JavaScript', 'Flipper'],
        achievements: [
          <span>Integrated React DevTools into Flipper (<Link to="https://fburl.com/rdts">fburl.com/rdts</Link>)</span>,
          <span>Integrated Relay Debugger into Flipper</span>,
          <span>Made border rendering on Android W3C spec-compliant (<Link to="https://fburl.com/barn">fburl.com/barn</Link>)</span>,
          <span>Introduced start*, end* direction-aware styles in React Native (<Link to="https://fburl.com/dsrn">fburl.com/dsrn</Link>)</span>,
          'Replaced the iOS backend of <WebView/> component with WKWebView'
        ],
      }],
    }, {
      name: 'Rangle.io',
      title: 'Full Stack JavaScript Developer',
      range: 'Fall 2015, Spring 2016',
      projects: [{
        name: 'Atlas',
        tools: ['React', 'Angular 1.4', 'Koa.js', 'Redux', 'Ramda', 'Basscss'],
        achievements: [
          'Worked on Atlas: an in-house app was used by management to staff projects',
          'Merged Atlas into another in-house app that tracked Scrum-related metrics for teams',
        ],
      }, {
        name: 'Mercatus',
        tools: ['Angular 1.5', 'Jasmine', 'LESS'],
        achievements: [
          'On-site Angular consulting for a team of six client developers at Mercatus for ~2 months',
          'Rebuilt the faceted search front-end of their Angular 1.5 web e-commerce application',
        ],
      }, ],
    }, {
      name: 'Ontario Ministry of Govt. Services',
      title: 'Interactive Developer',
      range: 'Spring 2014',
      projects: [{
        name: 'Accomplishments:',
        tools: ['PHP', 'MySQL', 'Vagrant', 'Puppet', 'Symfony 2'],
        achievements: [
          'Leveraged caching with Symfony2 to halve page load times on the Premier\'s website',
          'Refactored a legacy PHP app to remove security vulnerabilities with authentication',
          'Authored Packer and Puppet scripts to automatically build Vagrant VM images for four projects',
        ],
      }],
    }],
    projects: [{
      name: 'OJ - A Java Compiler',
      tools: ['Kotlin', 'Spec'],
      demos: [],
      github: 'https://github.com/ayushbhagat/oj',
      achievements: [
        'Coauthored a compiler for JOOS 1W, a large subset of Java 1.3',
        <span>Supports visibility, packages, type checking, strings, method overloading/overriding, <Link to="https://www.student.cs.uwaterloo.ca/~cs444/joos.html">and more...</Link></span>,
        'Most correct implementation of JOOS 1W in class of 2018'
      ]
    }, {
      name: 'Reddit Client',
      tools: ['Reddit API', 'React', 'Redux', 'redux-saga', 'reselect'],
      demos: ['https://rc-rsnara.herokuapp.com/r/pics/hot'],
      github: 'https://github.com/rsnara/reddit-client',
      achievements: [
        'A Reddit clone built to experiment with Redux and Reselect',
        'Created a reddit-style comment tree, image previews, and multiple subreddits',
      ],
    }],
  },
};

export default Resume;

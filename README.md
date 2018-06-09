# Resume
This is my Resume written in [React](https://github.com/facebook/react)!

## Architecture
This resume is designed using a component-oriented architecture, which is why React is used. That said, other libraries like [Ember](https://github.com/emberjs/ember.js), [Angular](https://github.com/angular/angular.js), and [Polymer](https://github.com/Polymer/polymer) are perfectly good alternatives. Why I chose React was simply because it was easiest for me to work with.

## Developing Resume
The project is linted at compile-time using [ESLint](https://github.com/eslint/eslint). We're also using [Babel](https://github.com/babel/babel) with its [stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)  preset to compile down to `ES5`. We're also using [webpack](https://github.com/webpack/webpack) and [react-transform](https://github.com/gaearon/react-transform). To start working on the resume, run the following:
```BASH
> npm install
> npm start
```

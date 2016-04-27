# Resume
This is my 3A Resume written in [React](https://github.com/facebook/react)!

## Architecture
This resume is designed using a component-based architecture, hence the useage of React. That said, other frameworks like [Ember](https://github.com/emberjs/ember.js), [Angular](https://github.com/angular/angular.js), and [Polymer](https://github.com/Polymer/polymer) are perfectly good substitutes for React in this case. The reason why React was used simply because I found it the easiest to work with.


## Developing Resume
The project is linted at compile-time using [ESLint](https://github.com/eslint/eslint). We're also using [Babel](https://github.com/babel/babel) with its [stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)  preset to compile down to `ES5`. We're also using [webpack](https://github.com/webpack/webpack) and [react-transform](https://github.com/gaearon/react-transform). To start working on the resume, run the following:
```BASH
> npm install
> npm start
```

## Acknowledgements
This project was forked from [gaearon](https://github.com/gaearon)'s [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate). So special thanks to him!

# react-demokit
> Demo tookit for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-demokit
```

## properties
| Name        | Type    | Required | Default                                                             | Description                           |
| ----------- | ------- | -------- | ------------------------------------------------------------------- | ------------------------------------- |
| className   | string  | false    | -                                                                   | The extended className for component. |
| url         | string  | false    | -                                                                   | The github homepage url.              |
| title       | string  | false    | -                                                                   | The compoennt name.                   |
| description | string  | false    | -                                                                   | The component description.            |
| element     | element | false    | <img width="160" src="https://create-react-app.dev/img/logo.svg" /> | Main element.                         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-github-corner/dist/style.scss";
  @import "~@jswork/react-sw-update-tips/dist/style.scss";
  @import "~@jswork/react-demokit/dist/style.scss";

  // customize your styles:
  $react-demokit-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import pkg from '../package.json';
  import ReactDemokit from '@jswork/react-demokit';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <div className="app-container">
          <ReactDemokit
            title="react demokit"
            description={pkg.description}
            className="p-6">
            <button className="button">I'm the component 🐶</button>
          </ReactDemokit>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-demokit/


## license
Code released under [the MIT license](https://github.com/afeiship/react-demokit/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-demokit
[version-url]: https://npmjs.org/package/@jswork/react-demokit

[license-image]: https://img.shields.io/npm/l/@jswork/react-demokit
[license-url]: https://github.com/afeiship/react-demokit/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-demokit
[size-url]: https://github.com/afeiship/react-demokit/blob/master/dist/react-demokit.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-demokit
[download-url]: https://www.npmjs.com/package/@jswork/react-demokit

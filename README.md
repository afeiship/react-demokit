# react-demokit
> Demo tookit for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-demokit
```

## update
```shell
npm update @feizheng/react-demokit
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| url       | string | false    | -       | The github homepage url.              |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-github-corner/dist/style.scss";
  @import "~@feizheng/react-sw-update-tips/dist/style.scss";
  @import "~@feizheng/react-demokit/dist/style.scss";

  // customize your styles:
  $react-demokit-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactDemokit from '@feizheng/react-demokit';
  import './assets/style.scss';

  class App extends React.Component {
    state = { hasUpdate: false };

    componentDidMount() {
      NxOfflineSw.install({
        onUpdateReady: () => {
          this.setState({ hasUpdate: true });
        }
      });
    }

    render() {
      return (
        <div className="p-3 app-container">
          <ReactDemokit className="mb-5 text-white">
            <button className="button">I am a button</button>
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

[version-image]: https://img.shields.io/npm/v/@feizheng/react-demokit
[version-url]: https://npmjs.org/package/@feizheng/react-demokit

[license-image]: https://img.shields.io/npm/l/@feizheng/react-demokit
[license-url]: https://github.com/afeiship/react-demokit/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-demokit
[size-url]: https://github.com/afeiship/react-demokit/blob/master/dist/react-demokit.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-demokit
[download-url]: https://www.npmjs.com/package/@feizheng/react-demokit

import React from 'react';
import ReactDOM from 'react-dom';
import pkg from '../package.json';
import ReactDemokit from '../src/main';
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

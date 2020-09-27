import React from 'react';
import ReactDOM from 'react-dom';
import ReactDemokit from '../src/main';
import './assets/style.scss';
class App extends React.Component {
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

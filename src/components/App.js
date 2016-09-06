import React from 'react';
import Navigation from './Navigation';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
      <Navigation />
      <div id="page-wrapper">
          {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;

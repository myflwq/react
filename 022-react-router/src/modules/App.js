import React , { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
        {this.props.children}
        <div>My Footer</div>
      </div>
    );
  }
}
export default App;

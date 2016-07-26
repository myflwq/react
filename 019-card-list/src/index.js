import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './component/List.js';

class App extends Component {

  render(){


    return(
      <div>
        <List/>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="mayanfang"/>,

  document.getElementById('app'));

import React from 'react';
import MyDemo from './MyDemo';
import DestroyComponent from './DestroyComponent.js';
class App extends React.Component {


  render () {

    return(
      <div>
        <MyDemo />
        <DestroyComponent />
      </div>
    )
  }
}

export default App;

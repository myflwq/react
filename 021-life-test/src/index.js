import React from 'react';
import { render } from 'react-dom';
import App from './App';

class MyApp extends React.Component {


  render () {
    return(
      <div>
        <App/>
      </div>
    )
  }
}


render(
  <MyApp/> ,
  document.getElementById('root')
  );

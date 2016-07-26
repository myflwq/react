import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Img from './Img';
// import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends React.Component {


  render () {
    console.log(this.props.children);
    return(
      <div>
        <Img />
        <App>
          <p>234</p>
        </App>

      </div>
    )
  }
}


render(
  <MyApp/> ,
  document.getElementById('root')
  );

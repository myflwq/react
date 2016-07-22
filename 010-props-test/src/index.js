import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './component/Button.js';
import CardList from './component/CardList.js';
let btnProps = {
  title:"来自外部的变量",
  bg:"#eee",
  bc:"#eee"
}
class App extends Component {

  render(){
    let btns=[
      <Button key="1"/>,<Button key="2"/>,<Button key="3"/>,<Button key="4"/>
    ]

    return(
      <div>
        <p>hello {this.props.name}</p>
        <Button title="click" bg='#2db7f5' bc='#2db7f5'/>
        <Button title={btnProps.title} bg={btnProps.bg} bc={btnProps.bc}/>
        <Button/>
        <Button {...btnProps}/>
        {btns}
        <CardList/>
      </div>
    )
  }
}

ReactDOM.render(
  <App name="mayanfang"/>,

  document.getElementById('app'));

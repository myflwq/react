import React, { PropTypes } from 'react'
class MyDemo extends React.Component {
  constructor(){
    super();
    this.state={
      opacity:1,
    }
    alert('init');
  }
  render () {
    alert('render');
  return(
    <div>
      <h1>demo</h1>
      <div style={this.state}>hello word</div>
    </div>
    )
  }
  componentDidMount(){
    this.interval = setInterval( this.change.bind(this),1000)
    alert('did');
  }
  componentWillMount(){
    alert('will');
  }
  change(){
    // if(this.state.opacity>0){
    //   var x = this.state.opacity - 0.1
    // }else{
    //   var x = 1
    // }
    this.setState({
      opacity:this.state.opacity>0? this.state.opacity-0.1 : 1,
    })
  }
}

export default MyDemo;

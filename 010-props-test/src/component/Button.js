import React, { Component } from 'react';

class Button extends Component {

  render(){
    const styles = {
      color: '#fff',
      backgroundColor: this.props.bg,
      borderColor: this.props.bc,
      padding: '4px 15px 5px 15px',
      fontSize: '14px',
      borderRadius: '6px'
    }
    return (
      <button style={styles}>{this.props.title}</button>
    )
  }
}
Button.defaultProps={
  title:"我是默认标题",
  bg:"red",
  bc:"red"
}
{/*设置按钮默认样式*/}
Button.propTypes = {
  title:React.PropTypes.string.isRequired,
  bg:React.PropTypes.string.isRequired,
  bc:React.PropTypes.string.isRequired
}
export default Button;

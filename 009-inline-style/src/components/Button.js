import React, { Component } from 'react';

class Button extends Component {
  getStyles() {
     return {
       button: {
         color: '#fff',
         backgroundColor: '#2db7f5',
         borderColor: '#2db7f5',
         padding: '4px 15px 5px 15px',
         fontSize: '14px',
         borderRadius: '6px'
       }
     }
   }
  render(){
    const styles = this.getStyles();
    return (
      <button style={styles.button}>click</button>
    );
  }
}

export default Button;

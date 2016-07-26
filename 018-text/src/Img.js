import React, { PropTypes } from 'react'
import Me from '../images/1.jpeg'
class Img extends React.Component {
  render () {
    let styles={
      width:'200px',
      height:'200px',
      backgroundImage: 'url('+ Me +')'
    }
  return(
    <div>
      <img src={Me}/>
      <div style={styles}></div>
    </div>
    )
  }
}

export default Img;

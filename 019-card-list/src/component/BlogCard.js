import React, { Component } from 'react';


class BlogCard extends Component {

  render(){
    const styles = {
      left:{
        float:"left",
        width:"15%",
        height:"100px",
        backgroundColor: "#44BBE6",
        borderColor: "#44BBE6",
        lineHeight:"100px",
        textAlign:"center"

      },
      right:{
        float:"left",
        paddingLeft:"2%",
        width:"83%",
        height:"100px",
        backgroundColor:"#D1DCE0",
        borderColor:"#D1DCE0"
      },
      root:{
        width:"85%",
        margin:"20px auto",
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
        fontSize: '14px',
        overflow:"hidden"

      }
    }
    return (
          <div style={styles.root}>
            <div style={styles.left}>{this.props.index}</div>
            <div style={styles.right}>
              <h3>{this.props.title}</h3>
              <p>{this.props.data}</p>
            </div>
          </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  title:"red",
  date:"red"
}
export default BlogCard;

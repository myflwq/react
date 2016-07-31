import React, { PropTypes } from 'react'

class UserInfo extends React.Component {
  render () {
    const userInfo = this.props.userInfo
    let styles={
      width:'200px',
      height:'200px'
    }
    console.log(userInfo.avatar_url);
    return(
      <div style={styles}>
        <img src={userInfo.avatar_url}/>
      </div>
    )
  }
}

export default UserInfo;

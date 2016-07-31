import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import UserInfo from './UserInfo';
//引入颜色
// import {purpleA200, yellow500, blue500} from 'material-ui/styles/colors';
//
// var myTheme={
//   palette: {
//    primary2Color: purpleA200,
//    primary1Color: yellow500,
//  }
// }
//定义颜色
class App extends React.Component {
  constructor(props){
    super();
    this.state={
      user:{},
    }
  }
  getChildContext() {
   return {muiTheme: getMuiTheme()};//传值myTheme改变颜色
 }
 _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(account);
    axios.get(`https://api.github.com/users/${account}`)
     .then((res) => {
       this.setState({user: res.data});
        console.log(res);
      });
  }
  render () {

    console.log(this.state.user)
    return(
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <TextField
               hintText="Your Github Account"
               ref="account"
             />
           <FlatButton label="SEARCH GITHUB" secondary={true} type="submit"/>
        </form>
        <UserInfo userInfo={this.state.user}/>
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;

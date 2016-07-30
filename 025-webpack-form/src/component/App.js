import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Complete from './AutoComplete';
import Button from './Button';


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
  getChildContext() {
   return {muiTheme: getMuiTheme()};//传值myTheme改变颜色
 }

  render () {

    return(
      <div>
        <Complete />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;

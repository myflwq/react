import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Complete from './AutoComplete';
import DrawerOpenRight from './Drawer';
import SvgIconExampleIcons from './SvgIcon.js';
import FontIconExampleIcons from './FontIcon.js';
import AppBarExampleIconButton from './AppBar.js';
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
        <AppBarExampleIconButton />
        <Complete />
        <RaisedButton label="Primary" primary={true} />
        <DrawerOpenRight />
        <SvgIconExampleIcons />
        <FontIconExampleIcons />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;

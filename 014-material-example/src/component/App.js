import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Complete from './AutoComplete';
import DrawerOpenRight from './Drawer';
import SvgIconExampleIcons from './SvgIcon.js';

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};
 }

  render () {

    return(
      <div>
        <Complete />
        <RaisedButton label="Primary" primary={true} />
        <DrawerOpenRight />
        <SvgIconExampleIcons />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};


export default App;

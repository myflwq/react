import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    };
  }

  handleUpdateInput(value){
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render () {
    const style = {
    margin: 12,
    };
    return(
      <div>

        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secdary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
        <br />
        <br />
        <RaisedButton label="Full width" fullWidth={true} />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;

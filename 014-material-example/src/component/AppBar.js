import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


class AppBarExampleIconButton extends React.Component {
  handleTouchTap() {
    alert('click');
  }
  titleClick(){
    alert('title');
  }
  render() {
    return (
      <AppBar
        title="title"
        onTitleTouchTap={this.titleClick.bind(this)}
        onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
        iconElementRight={<FlatButton label="Save" />}
      />
);
}
}
export default AppBarExampleIconButton;

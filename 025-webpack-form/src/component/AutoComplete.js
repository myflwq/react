import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
class Complete extends React.Component {
  render () {

    return(
      <div>
        <TextField
             hintText="Hint Text"
           />
         <FlatButton label="SEARCH GITHUB" secondary={true} />
      </div>
    )
  }
}



export default Complete;

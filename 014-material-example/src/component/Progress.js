import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';


class Progress extends React.Component {
  getStyles(){
    return{
      root:{
        margin:'0 auto',
        width:'60px',
        height:'60px',
        paddingTop:'100px'
      }
    }

  }
  render () {
    const styles = this.getStyles();
    return(
      <div style={styles.root}>
        <CircularProgress />
      </div>
    )
  }
}

export default Progress;

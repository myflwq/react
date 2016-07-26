import React from 'react';

class App extends React.Component {


  render () {

    return(
      <div>
        {this.props.children}
        <ul>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>;
          })
        }
      </ul>

        {React.Children.count(this.props.children)}
        {React.Children.only(this.props.children)}
      </div>
    )
  }
}

export default App;

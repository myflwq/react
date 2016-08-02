import React from 'react';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resString: "resString"
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/myflwq')
         .then((res) => {
            this.setState({resString: res.data.avatar_url});
            console.log(res);
          });
  }
  render() {
    return (
      <div>
          <h1> My Github Info</h1>
          <img src={this.state.resString} />
      </div>
    );
  }
}


export default App;

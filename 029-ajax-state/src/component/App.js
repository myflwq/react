import React from 'react';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resString: "resString"
    };
  }
  _handleSubmit(e) {
    e.preventDefault();

    axios.get('https://api.github.com/users/a-people')
         .then((res) => {
            this.setState({resString: res.data.avatar_url});
            console.log(res);
          });
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <button type="submit">submit</button>
        </form>
        <img src={this.state.resString} />
      </div>
    );
  }
}


export default App;

import React from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import BlogCard from './BlogCard.js';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      posts: ''
    }
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/myflwq/react-router/master/posts/index.json')
    .then((res) => {
       this.setState({
         posts: res.data
       });
    });
  }
  render() {
    console.log(this.state.posts);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.created_at } index={b.index} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>

    );
  }
}


export default App;

import React, { Component } from 'react';

import Card from './Card.js';

let Cards = [
  {title:'这是第一天',data:'2016.7.19'},
  {title:'这是第二天',data:'2016.7.21'},
  {title:'这是第三天',data:'2016.7.22'}
]

class CardList extends Component {
  render(){
    var AllCards = [];
    for (var i = 0; i < Cards.length; i++) {
      let j=i+1;
      AllCards.push(
        <Card title={Cards[i].title} data={Cards[i].data} index={j} key={i}/>
      )
    };
    return(
      <div>
        {AllCards}
      </div>
    )
  }
}

export default CardList;

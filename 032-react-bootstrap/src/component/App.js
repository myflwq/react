import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

class App extends React.Component {
  getStyles(){
    return{
      img:{
          width:'100%',
          height:'600px',
      }
    }
 }
  render () {
    let style = this.getStyles();
    return(
      <div>
        <Carousel interval={1000}>
          <Carousel.Item>
            <img style={style.img} alt="900x500" src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style.img} alt="900x500" src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={style.img} alt="900x500" src="http://static7.depositphotos.com/1008939/726/i/950/depositphotos_7264018-Programmer.jpg"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}



export default App;

import React, {Component} from 'react';
import './App.css';
import LifeCycleSmaple from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



class App extends Component{

  state = {
    color:'#00000'
  }

  handleClick = () =>{
    this.setState({
      color:getRandomColor()
    })
  }
  render() {
    return (
      <div >
        <button onClick = {this.handleClick}>랜덤색상 출력</button>
        <LifeCycleSmaple color={this.state.color}/>
      </div>
    );
  }
}
  

export default App;

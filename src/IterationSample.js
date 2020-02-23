import React, {Component} from 'react';

class IterationSample extends Component{

  state={
    names: ['snowman', 'ice', 'snow', 'wind'],
    name : ''
  }

  InputChange=(e) =>{
    this.setState({
      name:e.target.value
    })
  }

  BtnClick=() =>{
    this.setState({
      names: this.state.names.concat(this.state.name),
      name:''
    })
  }

  handleRemove = (index) =>{
    const {names} = this.state;
    this.setState({
      names : names.filter((item, i) => i !== index)
    });
  }

  render() {
    const namelist = this.state.names.map((name, index)=>(
      <li key={index} onDoubleClick={() => this.handleRemove(index)} >{name}</li>
    ));
    return (
      <div>
        <input onChange={this.InputChange} placeholder="enter your word" value={this.state.name}></input>
        <button onClick={this.BtnClick}>PUSH IT!!!</button>
        <ul>{namelist}</ul>
      </div>
    );
  }

}

export default IterationSample;
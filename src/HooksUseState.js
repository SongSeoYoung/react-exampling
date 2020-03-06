import React, {Component, useState } from 'react'

// const HooksUseState = () => {
//   const [item, setItem] = useState(1)
//   const increamentItem = () =>{
//     setItem(item+1)
//   }
//   const decreamentItem = () => {
//     setItem(item-1)
//   }

//   return (
//     <>
//       <div>{item}</div>
//       <button onClick={increamentItem}>increament</button>
//       <button onClick={decreamentItem}>decreament</button>
//     </>
//   )
// }

class HooksUseState extends Component {
  state = {
    number:1
  }
  Increament = () => {
    this.setState({
      number : this.state.number+1
    })
  }
  Decreament = () => {
    this.setState({
      number: this.state.number-1
    })
  }
  render(){
    return (
      <>
      <div>{this.state.number}</div>
      <button onClick={this.Increament}>increament</button>
      <button onClick={this.Decreament}>decreament</button>
      </>
    )
  }
}

export default HooksUseState
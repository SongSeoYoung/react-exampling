import React, {useState, Component} from 'react';

const App = () => {
  const [item, setItem] = useState(1);    //useState는 array를 반환하는데 item이 첫 번째, setItem이 두 번째 요소라고 생각하면 쉽낟. 여기서 1은 initialState. 이렇게 사용하면 턴 값에 item을 상ㅇ할 수 잇따. hooks의 좋은 점은 함수를 사용하 ㄹ수 있따는 점.
  const increamentItem = () =>{
    setItem(item+1)
  }
  const decreamentItem = () => {
    setItem(item-1)
  }
  return (
    <>
    <div>{item}</div>
    <button onClick={increamentItem}>increment</button>
    <button onClick={decreamentItem}>decrement</button>
    </>
  )

}

// class App extends Component {
//   state = {
//     number :1
//   }

//   IncrementItem =() =>{
//     this.setState({
//       number : this.state.number+1
//     });
//   }

//   // IncrementItem = () =>{
//   //   this.setState(state => {
//   //     return {
//   //       number : state.number +1
//   //     }
//   //   })
//   // }

//   DecrementItem = () => {
//     this.setState({
//       number: this.state.number-1
//     })
//   }

//   render(){

//     return (
//       <>
//         <div>{this.state.number}</div>
//         <button onClick={this.IncrementItem}>increment</button>
//         <button onClick={this.DecrementItem}>decrement</button>
//       </>
//     )

//   }
// }
  

export default App;

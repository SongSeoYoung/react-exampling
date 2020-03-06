import React, {Component, useState} from 'react'

const useInput = (initialValue, validator) =>{
  //기본적으로 input을 업데이트하는 것. 
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const{
      target : {value}
    } = event;

    let willUpdate = true;
    if(typeof validator==="function"){
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return {value, onChange}
}


const HooksUseInput = () =>{
  const maxLength = (value) => value.length <= 10;
  // const maxLength_ = 0
  const name = useInput("Mr.", maxLength)
  return (
    <input placeholder="input your name" value={name.value} onChange={name.onChange}/>
  )
}


// class HooksUseInput extends Component {
//   state = {
//     value : ''
//   }
//   onChange = (e) => (
//     this.setState(
//       this.value=e.target
//     )
//   );



//   render(){
//     console.log(this.state.value);
//     return (
//       <>
      
//         <input placeholder="input your name" value={this.state.value} onChange={this.onChange} />
//       </>
//     )
//   }

// }

export default HooksUseInput
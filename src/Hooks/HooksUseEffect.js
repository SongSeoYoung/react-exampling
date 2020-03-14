import React, {useEffect, useState} from 'react'


const HooksUseEffect =() =>{
  const sayHello =() =>console.log("Hello")
  useEffect( () =>sayHello(),[] );
  //useEffect를 사용했기 때문에 componentDidMount처럼 렌더링이 되면 자동으로 sayHello를 불러오게 됨.
  //즉 버튼을 누르면 다시금 렌더링이 되니까 또 다시 sayHello를 불러옴.
  //useEffect는 두 가지 파라미터를 받는데, 처음은 effect다 들어가고, 두 번짼는 dep로 dep가 바뀔 때만 effect가 실행됨.
  //만약 dependency가 비어있다면 useEffect는 실행되지않음. 

  const [number, setNumber] = useState(0)
  const [Anumber, setAnumber] = useState(0)
  return (
    <>
    <h1>useEffect</h1>
    <button onClick ={() => setNumber(number+1)}>{number}</button>
    <button onClick ={() => setAnumber(Anumber +1)}>{Anumber}</button>
    </>
  )
}

export default HooksUseEffect
import React, {useEffect, useState} from 'react'


const HooksUseEffect =() =>{
  const sayHello =() =>console.log("Hello")
  useEffect(() => {
    sayHello()
  })
  //useEffect를 사용했기 때문에 렌더링이 되면 자도으로 sayHello를 불러오게 됨.

  const [number, setNumber] = useState(0)
  const [Anumber, setAnumber] = useState(0)
  return (
    <>
    <h1>Hi</h1>
    <button onClick ={() => setNumber(number+1)}>{number}</button>
    <button onClick ={() => setAnumber(Anumber +1)}>{Anumber}</button>
    </>
  )
}

export default HooksUseEffect
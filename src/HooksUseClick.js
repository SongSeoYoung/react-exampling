import React, { useRef, useEffect} from 'react'

const useClick = onClick => {

  const element = useRef();   
  useEffect(() => {
    if(element.current) {
      element.current.addEventListener('click', onClick)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick)
      }
    }
  }, []);
  
}
//useClick함수는 ref를 반환하는데 그 ref에 해당하는 element를 반환하는 것.
//근데 우리는 title이라는 변수에 현재 useClick을 주었으니까, 결국 title과 같은 ref의 element만 반환하게 된다. 
//useEffect를 사용한 것은 element안에 current가 존재하는지 보기 위해서이고, 만약 존재하게된다면 addEventListener로 onClick이벤트를 추가하게 된다. 
//useEfffect에서 return 값을 주지 않으면 componentDidMount, componentDidUpdate일 때만 실행이 되는건데(dep값이 없다고 가정할 때) 우리가 만약에
//componentWillUnMount일 때도 effect를 추가하고 싶다면 return 에다가 function을 추가하자. 

const HooksUseClick =() => {
  const sayHello =() => console.log("say hello")
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>UseClick</h1>
    </div>
  )
}
export default HooksUseClick;
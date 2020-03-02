//프레젠테이셔널 컴포넌트\

import React from 'react';

function Counter ( {number, diff, onIncrease, onDecrease, onSetDiff}){

  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10));
    //paresInt들어오는 내용(e.target.value)을 string이 아니라 int형으로 바꿔주는 함수. 
    //그렇개 int로 바꿨으면 그 것을 onSetDiff에 넣는데, 그것은 다시 setDiff에 들어가고, setDiff에서 액션이 생성됨. 
    //이 모든 과정을 담은 함수가 onChange함수이다. 
  }


  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick = {onIncrease}>+</button>
        <button onClick = {onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
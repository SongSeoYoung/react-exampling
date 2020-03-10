import React from 'react';

const usePreventLeave =() => {
  const listener =(event) => {
    event.preventDefault()
    event.returnValue =""
  }
  const enablePrevent =() => window.addEventListener("beforeunload", listener)
  const disablePrevent =() =>window.removeEventListener("beforeunload", listener)
  return {enablePrevent, disablePrevent}
}
//beforeunload는 window가 닫히기 전에 Function이 실행되는 것을 허락함.또는 사람들이 페이지를 떠날 때 
//

const HooksUSePreventLeave =() => {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  )
}

export default HooksUSePreventLeave;
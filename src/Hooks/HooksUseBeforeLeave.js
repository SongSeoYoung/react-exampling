import React, {useEffect} from 'react';

const useBeforeLeave =(onBefore) => {
  if(typeof onBefore !=="function"){return ;}

  const handle =(event) => {
    console.log(event)
    onBefore()
  }
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [])
}
const HooksUseBeforeLeave =() => {
  const begForLife =() => {console.log("plz don't leave")}
  useBeforeLeave(begForLife)
  return (
    <h1>useBeforeLeave</h1>
  )
}
export default HooksUseBeforeLeave;
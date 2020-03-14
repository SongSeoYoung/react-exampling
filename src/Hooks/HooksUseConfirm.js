import React from 'react'

const useConfirm =(message="", callback, rejection) =>{
  const confirmAction=() => {
    if (window.confirm(message)) {
      callback();
    }else {
      rejection()
    }
  }
  return confirmAction;
}

const HooksUseConfirm =() => 
{
  const deleteWorld =() => {console.log("Deleting the world")}
  const abort =() =>{console.log("aborted")}
  const confirmDelete = useConfirm("are you sure?", deleteWorld, abort)
  return (
    <>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete</button>
    </>
  )
}
export default HooksUseConfirm
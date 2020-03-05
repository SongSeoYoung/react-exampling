const myLogger = store => next => action => {
  console.log(action)
  console.log('\tPrev', store.getState()) //\t는 탭 문자를 의미
  const result = next(action)
  console.log('\tNext', store.getState())   //액션이 리듀서에 다 적용되고 난 후에 다음 상태를 콘솔에 출력하도록 함. 
  return result;    //컨테이너에서 디스패치 되었을 때 반환하는 결과물. 
}

export default myLogger
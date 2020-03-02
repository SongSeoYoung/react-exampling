const SET_DIFF = 'counter/SET_DIFF';    //덕스 패턴을 사용할 때는 액션 타입을 정의할 때 앞에 접두사 counter와 같이 파일 명을 적어주어야한다. 안 헷갈리게 하기 위해서!
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({
  type:SET_DIFF,
  diff
})

export const increase = () => ({
  type:INCREASE,
})

export const decrease = () => ({
  type: DECREASE,
})


const initialState = {
  number : 0,
  diff : 1
}

export default function counter (state = initialState, action){
  switch(action.type){
    case SET_DIFF:
      return {
        ...state, 
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number : state.number  + state.diff
      }
    case DECREASE: 
      return {
        ...state,
        number : state.number  - state.diff
      }
    default : 
      return state;
  }
}

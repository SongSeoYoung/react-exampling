import {createStore} from 'redux'


//초기 값 설정
const initialState = {
  counter : 0,
  text : '',
  list : []
};


//액션 타입 정의 (대문자)
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'


//액션함수 설정(화살표 함수 이용 , 소문자 사용, _가 있으면 카멜법으로)
const increase = () => ({
    type : INCREASE,
});

const decrease = () => ({
  type:DECREASE,
});

const changeText= text => ({
  type:CHANGE_TEXT,
  text
});

const addToList = item => ({
  type:ADD_TO_LIST,
  item
})

//리듀서 정의(state의 초기상태를 꼭 넣어주어야하고, switch문으로 액션에 따라서 각각의 다른 일들이 일어나도록 함)
//리듀서는 디스패치 되면 어떻게 상태를 변화시킬 건지 관리하는 함수. 
function reducer(state = initialState, action){
  switch(action.type){
    case INCREASE:
      return {
        ...state,
        counter : state.counter+1,
      };
    case DECREASE:
      return {
        ...state,
        counter : state.counter -1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text : action.text,
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list : state.list.concat(action.item),
      }

    default: 
      return state;
  }
}


//스토어를 만든다. 이 때 스토어는 createStore이라는 내장 함수를 이용하는데, 스토어는 파라미터로 리듀서함수를 넣어줘야함.
const store = createStore(reducer);

//getState로 현재 스토어에 저장된 것을 확인하기 위해 콘솔창에 찍어줌. 
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);
// unsubscribe(); 이걸 사용하면 바로 구독이 해지된다. 


//액션을 객체인 스토어에 전달하는 디스패치 사용. store.dispatch(액션함수)
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('dksd'));
store.dispatch(addToList({id:1, text:'elfek'}));


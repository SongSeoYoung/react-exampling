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

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);
// unsubscribe(); 이걸 사용하면 바로 구독이 해지된다. 

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('dksd'));
store.dispatch(addToList({id:1, text:'elfek'}));

window.store=store;
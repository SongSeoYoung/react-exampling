//리덕스에 관련된 코드를 모아둔 파일을 "모듈" 이라고 한다! 



const ADD_TODO = 'todos/ADD_TODO'   //할 일 추가
const TOGGLE_TODO = 'todos/TOGGLE_TODO';    //할 일 체크


let nextID = 1;
export const addTodo = (text) => ({
  type : ADD_TODO,
  todo : {
    id : nextID++,
    text
  }
});

export const toggleTodo = id => ({
  type : TOGGLE_TODO,
  id
});


//initialState
const initialState = [
  /*
  {
    id : 1,
    text : 'aefe',
    done : flase
  }
  */
];



//reducer
export default function todos(state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(
          todo => todo.id === action.id ? {...todo, done : !todo.done} : todo
        );     
    default:
      return state;
  }
}
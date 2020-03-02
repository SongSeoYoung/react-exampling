//리덕스와 소통하며 상태관리를 함께 하는 컴포넌트를 "컨테이너" 라고 한다!! 여기는 리렌더링이 자주 일어나니 코드를 최대한 간결하게 짠다.


import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Todos from '../components/Todos'     //컴포넌트의 Todos
import {addTodo, toggleTodo} from '../modules/todos'    //모듈에서 액션함수를 가지고 옴. 



function TodosContainer() {
  const todos = useSelector(state => state.todos);    //useSelector 라는 hooks는 리덕스의 store에 접근. 그러니까 이 컨테이너의 todos라는 변수는 스토어의 todos라는 것을 명시해주는 코드
  const dispatch = useDispatch();                     //useDispatch는 컴포넌트 내에서 dispatch를 사용할 수있게 해주는 것. 이 컨테이너에서 정의한 dispatch라는 변수는 dispatch를 이어지게 해주는 것

  const onCreate = useCallback(text => dispatch(addTodo(text)),  [dispatch]);   //onCreate변수는 파라미터로 받은 텍스트를 디스패치(액션을 스토어에 전달)해주는데, 이 때 액션은 addTodo함수로 액션을 만들어주고 이 때 addTodo에는 파라미터로 받은 text가 들어감. 
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch])    //onToggle변수는 파라미터로 id를 받고, 위와 마찬가지 방법으로 디스패치해줌. 

  return <Todos 
    todos={todos}
    onCreate={onCreate}
    onToggle={onToggle}
  />
}

export default TodosContainer
import React, {useState} from 'react';


const TodoItem = React.memo(function TodoItem({todo, onToggle}) {
  return (
    <li
      style={{
        textDecoration: todo.done ? 'line-through' : 'none'
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
})


//여러개의 할 일 항목(todos)를 보여주는 함수
const TodoList = React.memo(function TodoList({todos, onToggle} ) {
  return (
    <ul>
      { todos.map(todo => (
        <TodoItem key = {todo.id} todo={todo} onToggle={onToggle}/>
        ))}
    </ul>
  )
})


//새로운데이터를 등록해주는 것, 
function Todos({todos, onCreate, onToggle}){
  const [text, setText] = useState('');
  //text값을 로컬에서 관리할 수 잇도록(리덕스 아님) useState를 적절하게 사용
  const onChange = e => setText(e.target.value);    //change가 일어났을 때 이벤트가 일어난 text값을 상태로 넣음. 
  const onSubmit = e =>{    //submit이 일어나면
    e.preventDefault();     //submit을 하면 원래 새로고침이 되게되는데 그거를 방지
    onCreate(text);         //그리고나서 text를 onCreate로 만들어주고
    setText('');    //다시금 state text를 공백으로 만들어줌. 
  }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder="할일을 입력하세요"/>
        <button type="submit">등록</button>
      </form>
      <TodoList
        todos={todos} onToggle={onToggle}/>
    </div>
  )
}

export default React.memo(Todos);
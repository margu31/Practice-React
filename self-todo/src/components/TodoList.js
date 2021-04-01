import { useState } from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li>
      <input onClick={(e) => onToggle(todo.numbering, e)} type="checkbox" id={`todo-${todo.numbering}`} />
      <label htmlFor={`todo-${todo.numbering}`}>{todo.text}</label>
    </li>
  );
};

const TodoItemList = ({ todos, onToggle }) => {
  return (
    <ul>
      {
        todos.map(todo => <TodoItem key={todo.numbering} todo={todo} onToggle={onToggle} />)
      }
    </ul>
  );
};

const TodoList = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  };
  const onKeyDown = e => {
    if (e.key === 'Enter'){
      onSubmit(e)
    } 
  };

  return (
    <>
      <h2>📝 To Do List</h2>
      <input value={text} placeholder="Write a list of what you need to do or what you want to do" onChange={onChange} onKeyDown={onKeyDown} />
      <button type="submit" onClick={onSubmit}>등록!</button>
      <h3>🌼 You Can Do It 🌼</h3>
      <TodoItemList todos={todos} onToggle={onToggle}/>
    </>
  );
};

export default TodoList;

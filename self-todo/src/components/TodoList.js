import { useState } from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li onClick={() => onToggle(todo.numbering)}>
      <input type="checkbox" id={`todo-${todo.numbering}`} />
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

  return (
    <>
      <h2>📝 To Do List</h2>
      <input value={text} placeholder="Write a to do list" onChange={onChange} />
      <button type="submit" onClick={onSubmit}>등록!</button>
      <hr />
      <h3>🌼 You Can Do It 🌼</h3>
      <TodoItemList todos={todos} onToggle={onToggle} />
    </>
  );
};

export default TodoList;

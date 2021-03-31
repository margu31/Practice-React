import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { addTodo, toggleTodo } from "../modules/todoModule";

const TodoContainer = () => {
  const todos = useSelector(state => state);
  console.log(todos)
  const dispatch = useDispatch();

  const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback(numbering => dispatch(toggleTodo(numbering)), [dispatch]);

  return (
    <TodoList todos={todos} onCreate={onCreate} onToggle={onToggle} />
  );
};

export default TodoContainer;
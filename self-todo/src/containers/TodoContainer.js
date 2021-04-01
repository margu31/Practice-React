import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/TodoList";
import { addDone, minusDone } from "../modules/countingModule";
import { addTodo, toggleTodo } from "../modules/todoModule";

const TodoContainer = () => {
  const todos = useSelector(state => state.todos);
  // console.log(todos)
  const dispatch = useDispatch();

  const onCreate = useCallback(text => {
    if (text) dispatch(addTodo(text))
  }, [dispatch]);
  
  const onToggle = useCallback((numbering, e) => {
    const isChecked = e.target.checked;
    dispatch(toggleTodo(numbering))
    dispatch(isChecked ? addDone() : minusDone())
  },[dispatch])
  
  return (
    <TodoList todos={todos} onCreate={onCreate} onToggle={onToggle} />
  );
};

export default TodoContainer;
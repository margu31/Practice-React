import { useSelector } from "react-redux";

const Counting = () => {
  const completed = useSelector(state => state.completed);
  const todos = useSelector(state => state.todos);

  return (
    <div>
      <span>COMPLETED: </span> 
      {completed} / {todos.length}
    </div>
  )
}

export default Counting;
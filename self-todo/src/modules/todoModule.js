// Action Type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextNumber = 1;

export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    numbering: nextNumber++,
    text
  }
});

export const toggleTodo = numbering => ({
  type: TOGGLE_TODO,
  numbering
});

// 상태초기값
const initialState = [];

const todos = (state = initialState, action) => {
  // console.log(state);
  // console.log(todos)
  switch (action.type) {
    case ADD_TODO :
      return state.concat(action.todo);
    case TOGGLE_TODO :
      return state.map(
        todo => todo.numbering === action.numbering 
        ? { ...todo, completed: !todo.completed }
        : todo
      );
    default:
      return state;
  }
};

export default todos;

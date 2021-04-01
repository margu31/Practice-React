import { combineReducers } from 'redux';
import todosReducer from './todoModule';
import countReducer from './countingModule'

const rootReducer = combineReducers({
  todos: todosReducer,
  completed: countReducer,
})

export default rootReducer;

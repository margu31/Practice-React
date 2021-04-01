// Action Type
const ADD_DONE='counting/ADD_DONE'
const MINUS_DONE='counting/MINUS_DONE'

export const addDone = () => ({
  type: ADD_DONE
})

export const minusDone = () => ({
  type: MINUS_DONE
})

const initialState = 0;

// Reducer
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DONE:
      return state + 1
    case MINUS_DONE:
      return state - 1
    default:
      return state;
  }
};

export default countReducer;
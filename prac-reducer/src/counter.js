import React from 'react';
import CountButton from './components/CountButton';
import Display from './components/Display';

export const MyContext = React.createContext();

const initialCount = 0;

const countReducer = (count, action) => {
  switch (action.type) {
    case 'decrease':
      return count - 1
    case 'increase':
      return count + 1
    default:
      return count
  }
}

const Counter = () => {
  const [count, dispatch] = React.useReducer(countReducer, initialCount);

  return (
    // <>
    //   <CountButton onClick={() => dispatch({type: 'decrease'})}> 감소 </CountButton>
    //   <Display>{count}</Display>
    //   <CountButton onClick={() => dispatch({type: 'increase'})}> 증가 </CountButton>
    // </>
    <MyContext.Provider value={{count, dispatch}}>
      <CountButton>감소</CountButton>
      <Display />
      <CountButton>증가</CountButton>
    </MyContext.Provider>
  )
};

export default Counter;
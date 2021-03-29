// console.log('Hello!');

import { createStore } from 'redux';

const initialState = {
  counter: 0,
  text: '',
  list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
// 현재 store 안에 있는 상태 조회 -> store.getState()
// console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

// 구독
const unsubscribe = store.subscribe(listener);
// 구독 해제
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안뇽~?'));
store.dispatch(addToList({ id: 1, text: 'Wow! '}));

// 아래 코드 작성하고 콘솔 창에서 store 치면 store안에 들어있는거 볼 수 있음 
// {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
window.store = store;

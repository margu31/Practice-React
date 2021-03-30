import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
  const { number, diff } = useSelector(
    state => ({
      // state에는 store.getState() 했을 때 반환되는 객체가 들어옴
      number: state.counter.number,
      diff: state.counter.diff,
    }), shallowEqual // 얕은 비교 
    // (left, right) => {
    //   return left.diff === right.diff && left.number === right.number
    // }
  );

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter 
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
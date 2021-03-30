import React from 'react';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer({ number, diff, increase, decrease, setDiff}) {

  return (
    <Counter 
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// const mapDispatchToProps = dispatch => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// 위 작업을 대신 해주는 코드가 아래임 (bindActionCreators 사용)
// 아래 코드처럼 작성할 경우, 위의 CounterContainer 함수의 파라미터 이름도 다 동일하게 바꿔줘야함
// const mapDispatchToProps = dispatch => bindActionCreators({
//   increase, decrease, setDiff
// }, dispatch);

// 함수 타입이 아닌 객체 타입인 경우 bindActionCreators가 자동으로 connect 내부에서 이루어져서 그냥 바로 사용 가능
const mapDispatchToProps = { increase, decrease, setDiff };


// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export default enhance(CounterContainer); 
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

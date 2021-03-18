import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // console.log('+1');\
    setNumber(number + 1); // 다음 상태를 넣어주거나 상태 업데이트(함수)
    // setNumber(prevNumber => prevNumber + 1); 성능 최적화
  }
  const onDecrease = () => {
    // console.log('-1');
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;
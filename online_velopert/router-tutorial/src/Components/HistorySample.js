import React, { useEffect } from 'react';

function HistorySample({ history }) {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  // // 방문 기록 남기지 않음 
  // const replaceToHome = () => {
  //   history.replace('/');
  // };

  useEffect(() => {
    // console.log(history);
    const unblock = history.block('정말 나갈거니? 가지마~');
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
      {/* <button onClick={goHome}>홈으로 (Replace)</button> */}
    </div>
  );
}

export default HistorySample;

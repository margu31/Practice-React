import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{
      color
    }}>
      {isSpecial ? <b>*</b> : null} 
      {/* 위 삼항연산자는 {isSpecial && <b>*</b>와 동일 */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
};

export default Hello;
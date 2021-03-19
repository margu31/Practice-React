import React, { useState } from 'react';

const { localStorage: storage } = window;

const Input = () => {
  const [state, setState] = useState('yamoo11@naver.com');

  const onChange = (e) => {
    setState(()=> e.target.value)
    // console.log(state);
  }

  const onFocus = (e) => {
    e.target.select()
  }

  React.useEffect(() => {
    
  })

  return (
    <>
      <form>
        <label htmlFor="email">이메일 주소</label>
        <input type="email" id="email" onChange={onChange} onFocus={onFocus} value={state}/>
      </form>
      <p>{state ? `입력된 이메일 주소: ${state}` : '이메일을 입력해주세요.'}</p>
    </>
  )
}

export default Input;

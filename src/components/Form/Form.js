/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../Button/Button';
import SingninInput from './SigninInput/SingninInput';
import CheckBox from './CheckBox/CheckBox';

const Form = ({children}) => {
  return (
    <form action="">
      <h2 className="offscreen">{children}</h2>
      <fieldset>
        <legend className="offscreen">로그인</legend>
        <SingninInput type="email" >아이디(이메일)</SingninInput>
        <SingninInput type="password" shape="show">비밀번호</SingninInput>
        <CheckBox className="auto-login">자동 로그인</CheckBox>
        <a href="#" className="button finding">아이디(이메일)/비밀번호 찾기 <span> &#62; </span></a>
        <Button mode="primary" state="normal">로그인</Button>
        <Button mode="secondary" state="normal">회원가입</Button>
      </fieldset>
    </form>
  )
}

export default Form;

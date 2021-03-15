/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import CopyRight from './components/CopyRight/CopyRight'

function App() {
  return (
    <main className="container">
      <Logo type='colorful'>쿠팡 웹사이트</Logo> 
      <Form>로그인 페이지</Form>
      <CopyRight />
    </main>
  );
}

export default App;

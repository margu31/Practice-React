import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './Components/About';
import HistorySample from './Components/HistorySample';
import Home from './Components/Home';
import Profiles from './Components/Profiles';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} /> 
      <Route path="/profiles" component={Profiles} /> 
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;

import React from 'react';
import qs from 'qs';

function About({ location }) {
  // console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })
  // console.log(query);
  const detail = query.detail === 'true';

  return (
    <div>
      <h1>イントロダクション</h1>
      <p>
        このプロジェクトはReact Routerを練習してみるプロジェクトです。
      </p>
      {detail && <p>Detail is TRUE!</p>}
    </div>
  );
}

export default About;

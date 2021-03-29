// import React, { useEffect } from 'react';
import React, { useContext } from 'react';
import { UserDispatch } from './App';

// const User = React.memo(function User({ user, onRemove, onToggle }) {
const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);

  // useEffect(() => {
  //   console.log('user 값이 설정됨');
  //   console.log(user);
  //   return () => {
  //     console.log('user 값이 바뀌기 전');
  //     console.log(user);
  //   }
  // }, [user]);

  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   // props => state
  //   // REST API
  //   // setInterval, setTimeout
  //   // 라이브러리
  //   return () => {
  //     // 뒷정리 함수
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거 
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

  return (
    <div>
        <b style={{
          color: active ? 'green' : 'black', 
          cursor: 'pointer'
          }}
          // onclick={() => onToggle(id)}
          onclick={() => dispatch({
            type: 'TOGGLE_USER', 
            id}
          )}
        >
          {username}
        </b>
        &nbsp;
        <span>({email})</span>
        {/* <button onClick={() => onRemove(id)}>삭제</button> */}
        <button onClick={() => dispatch({
          type: 'REMOVE_USER',
          id
        })}>삭제</button>
    </div>
  );
});

// function UserList({ users, onRemove, onToggle }) {
function UserList({ users }) {
  // const users = [
  //   {
  //     id: 1, 
  //     username: 'velopert',
  //     email:'public.velopert@gmail.com'
  //   },
  //   {
  //     id: 2, 
  //     username: 'judy',
  //     email: 'judydoll@judyworld.com'
  //   },
  //   {
  //     id: 3, 
  //     username: 'muni',
  //     email: 'muni1219@muniworld.com'
  //   }
  // ];

  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {
        users.map(
          // (user) => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
          (user) => (<User user={user} key={user.id} />)
        )
      }
    </div>
  );
}

export default React.memo(
  UserList, 
  // propsAreEquals?
  (prevProps, nextProps) => nextProps.users === prevProps.users
);



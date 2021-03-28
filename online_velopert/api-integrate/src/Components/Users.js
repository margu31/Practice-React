// import React, { useState, useEffect } from 'react';
// import React, { useEffect, useReducer } from 'react';
import React, { useState } from 'react';
import { getUsers, useUsersDispatch, useUsersState } from '../Context/UsersContext';
// import axios from 'axios';
// import useAsync from '../Hook/useAsync';
// import { useAsync } from 'react-async';
import User from './User';

// LOADING, SUCCCESS, ERROR
// 이 부분을 따로 떼어내어 재사용 가능! (다른 파일로 떼어내도 가능)
// function reducer(state, action) {
//   switch (action.type) {
//     case 'LOADING':
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       }
//     case 'SUCCESS':
//       return {
//         loading: false, 
//         data: action.data,
//         error: null,
//       }
//     case 'ERROR':
//       return {
//         loading: false, 
//         data: null,
//         error: action.error,
//       }
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// async function getUsers() {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return response.data;
// }

function Users() {
  // const [state, dispatch] = useReducer(reducer, {
  //   loading: false,
  //   data: null,
  //   error: null,
  // });
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  
  // const fetchUsers = async () => {
  //   dispatch({ type: 'LOADING' });
  //   try {
  //     // setUsers(null);
  //     // setError(null);
  //     // setLoading(true);
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/users'
  //     );
  //     dispatch({ type: 'SUCCESS', data: response.data });
  //     // setUsers(response.data);
  //   } catch (e) {
  //     console.log(e.response.status);
  //     dispatch({ type: 'ERROR', error: e });
  //     // setError(e);
  //   }
  //   // setLoading(false);
  // };

  // useEffect(() => {  
  //   fetchUsers();
  // }, []);

  // const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);
  // const { data: users, error, isLoading, reload } = useAsync({
  //   promiseFn: getUsers
  // });
 
  // const { data: users, error, isLoading, reload, run } = useAsync({
  //   deferFn: getUsers
  // });

  // const { loading, data: users, error } = state;

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다.</div>;
  // if (!users) return <button onClick={refetch}>불러오기</button>;
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { loading, data: users, error } = state.users;

  const fetchData = () => {
    getUsers(dispatch);
  }

  // if (isLoading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다.</div>;
  // // if (!users) return <button onClick={reload}>불러오기</button>;
  // if (!users) return <button onClick={run}>불러오기</button>;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  // if (!users) return <button onClick={run}>불러오기</button>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* <button onClick={fetchUsers}>다시 불러오기</button> */}
      {/* <button onClick={refetch}>다시 불러오기</button> */}
      {/* <button onClick={reload}>다시 불러오기</button> */}
      <button onClick={fetchData}>다시 불러오기</button>
      { userId && <User id={userId} />}
    </>
  );
}

export default Users;

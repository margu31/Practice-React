import React, { useRef } from 'react';
import UserList from './UserList';

// function App () {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial={true} />
//       <Hello color="pink" />
//     </Wrapper>
//   )
// }

function App () {
  const users = [
    {
      id: 1, 
      username: 'velopert',
      email:'public.velopert@gmail.com'
    },
    {
      id: 2, 
      username: 'judy',
      email: 'judydoll@judyworld.com'
    },
    {
      id: 3, 
      username: 'muni',
      email: 'muni1219@muniworld.com'
    }
  ];

  const nextId = useRef(4);

  const onCreate = () => {

    console.log(nextId.current); // 4
    nextId.current += 1;
  }

  return (
    <UserList users={users} />
  )
}

export default App;
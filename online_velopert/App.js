import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreactUser';

// function App () {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial={true} />
//       <Hello color="pink" />
//     </Wrapper>
//   )
// }
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App () {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    });
  }, [inputs]);

  const [ users, setUsers ] = useState([
    {
      id: 1, 
      username: 'velopert',
      email:'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2, 
      username: 'judy',
      email: 'judydoll@judyworld.com',
      active: false,
    },
    {
      id: 3, 
      username: 'muni',
      email: 'muni1219@muniworld.com', 
      active: false,
    }
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username, 
      email,
    };
    
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    });
    // console.log(nextId.current); // 4
    nextId.current += 1;
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter( user => user.id !== id  ))
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }, [users]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  )
}

export default App;
import React, { useRef, useState } from 'react';
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

function App () {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    });
  };

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

  const onCreate = () => {
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
  };

  const onRemove = id => {
    setUsers(users.filter( user => user.id !== id  ))
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  };

  return (
    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  )
}

export default App;
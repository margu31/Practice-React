import React from 'react';

function User({ user }) {
  return (
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

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
          user => (<User user={user} key={user.id} />)
        )
      }
    </div>
  );
}

export default UserList;



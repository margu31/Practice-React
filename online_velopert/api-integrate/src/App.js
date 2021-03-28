import React from 'react';
import Users from './Components/Users';
import { UsersProvider } from './Context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;

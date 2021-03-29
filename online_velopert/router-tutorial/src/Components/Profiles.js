import React from 'react';
import Profile from './Profile';
import { Link, Route } from 'react-router-dom';

function Profiles() {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li><Link to="/profiles/margu">margu</Link></li>
        <li><Link to="/profiles/optimushwang">optimushwang</Link></li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default Profiles;
import React from 'react';
import Profile from './Profile';
// import { Link, Route } from 'react-router-dom';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

function Profiles() {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {/* <li><Link to="/profiles/margu">margu</Link></li> */}
        {/* <li><Link to="/profiles/optimushwang">optimushwang</Link></li> */}
        <li>
          <NavLink 
            to="/profiles/margu" 
            activeStyle={{ background: 'black', color: 'white' }}
            // activeClassName="active"
            // isActive={(match, location) => {
            //   return true;
            // }}
          >
            margu
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/profiles/optimushwang" 
            activeStyle={{ background: 'black', color: 'white' }}
          >
            optimushwang
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
}

export default Profiles;
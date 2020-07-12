import React from 'react';
import { Link } from '@reach/router';

const LoggedInSidebar = ({ logout }) => {
  return (
    <>
      <li>Home</li>
      <li>
        <Link to="stage-plans">My plans</Link>
      </li>
      <li>
        <a
          onClick={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          Logout
        </a>
      </li>
    </>
  );
};

export default LoggedInSidebar;

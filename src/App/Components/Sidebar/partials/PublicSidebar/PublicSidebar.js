import React from 'react';
import { Link } from '@reach/router';

const PublicSidebar = ({ login }) => {
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

            login();
          }}
        >
          Login
        </a>
      </li>
    </>
  );
};

export default PublicSidebar;

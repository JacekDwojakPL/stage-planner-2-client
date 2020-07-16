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
        <Link to="login">Login</Link>
      </li>
    </>
  );
};

export default PublicSidebar;

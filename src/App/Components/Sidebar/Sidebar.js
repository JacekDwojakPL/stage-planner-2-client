import React from 'react';
import { Link } from '@reach/router';
import styles from './Sidebar.scss';

const Logout = ({ logout }) => {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        fetch('http://localhost:60703/signout')
          .then((response) => {
            if (response.status === 200) {
              logout();
            }
          })
          .catch(console.error);
      }}
      href="logout"
    >
      Logout
    </a>
  );
};

const Sidebar = ({ isAuthenticated, logout }) => {
  return (
    <ul className={styles.sidebar}>
      <li>Home</li>
      <li>
        <Link to="stage-plans">My plans</Link>
      </li>
      <li>
        {isAuthenticated ? (
          <Logout logout={logout} />
        ) : (
          <Link to="login">Login</Link>
        )}
      </li>
    </ul>
  );
};

export default Sidebar;

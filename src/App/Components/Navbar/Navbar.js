import React from 'react';
import { Link } from '@reach/router';
import styles from './Navbar.scss';

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

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <ul className={styles.navbar}>
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

export default Navbar;

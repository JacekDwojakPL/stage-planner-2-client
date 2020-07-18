import React from 'react';
import styles from './Main.scss';
import useAuthentication from '../../Authentication/useAuthentication.js';
import Navbar from '../Navbar/Navbar';
import MainScreen from '../MainScreen/MainScreen';

const App = () => {
  const { login, logout, isAuthenticated } = useAuthentication();
  const accessGranted = isAuthenticated();
  return (
    <div className={styles.root}>
      <Navbar isAuthenticated={accessGranted} login={login} logout={logout} />
      <MainScreen
        isAuthenticated={accessGranted}
        login={login}
        logout={logout}
      />
    </div>
  );
};

export default App;

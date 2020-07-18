import React from 'react';
import styles from './Main.scss';
import useAuthentication from '../../Authentication/useAuthentication.js';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';

const App = () => {
  const { login, logout, isAuthenticated } = useAuthentication();
  const accessGranted = isAuthenticated();
  return (
    <div className={styles.root}>
      <Sidebar isAuthenticated={accessGranted} login={login} logout={logout} />
      <MainScreen
        isAuthenticated={accessGranted}
        login={login}
        logout={logout}
      />
    </div>
  );
};

export default App;

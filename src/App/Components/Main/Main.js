import React from 'react';
import useAuthentication from '../../Authentication/useAuthentication.js';
import Navbar from '../Navbar/Navbar';
import MainScreen from '../MainScreen/MainScreen';

const App = () => {
  const { login, logout, isAuthenticated } = useAuthentication();
  const accessGranted = isAuthenticated();
  return (
    <div>
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

import React from 'react';
import { Router } from '@reach/router';
import useAuthentication from '../../Authentication/useAuthentication.js';
import Navbar from '../Navbar/Navbar';
import StagePlans from '../StagePlans/StagePlans';
import Login from '../Login/Login';
import Editor from '../Editor/Editor';

const App = () => {
  const { login, logout, isAuthenticated } = useAuthentication();
  const accessGranted = isAuthenticated();
  return (
    <div>
      <Navbar isAuthenticated={accessGranted} login={login} logout={logout} />
      <Router>
        <Editor path="/" isAuthenticated={isAuthenticated} />
        <Login path="login" login={login} />
        <StagePlans path="stage-plans" isAuthenticated={accessGranted} />
      </Router>
    </div>
  );
};

export default App;

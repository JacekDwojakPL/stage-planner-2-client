import React from 'react';
import StagePlans from '../StagePlans/StagePlans';
import Login from '../Login/Login';
import { Router } from '@reach/router';

const MainScreen = ({ isAuthenticated, login }) => {
  return (
    <Router>
      <StagePlans path="stage-plans" isAuthenticated={isAuthenticated} />
      <Login path="login" login={login} />
    </Router>
  );
};

export default MainScreen;

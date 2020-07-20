import React from 'react';
import StagePlans from '../StagePlans/StagePlans';
import Login from '../Login/Login';
import MainEditor from '../MainEditor/MainEditor';
import { Router } from '@reach/router';

const MainScreen = ({ isAuthenticated, login }) => {
  return (
    <Router>
      <MainEditor path="/" />
      <StagePlans path="stage-plans" isAuthenticated={isAuthenticated} />
      <Login path="login" login={login} />
    </Router>
  );
};

export default MainScreen;

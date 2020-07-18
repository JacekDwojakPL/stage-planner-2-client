import React from 'react';
import StagePlans from '../StagePlans/StagePlans';
import Login from '../Login/Login';
import { Router } from '@reach/router';
import styles from './MainScreen.scss';

const MainScreen = ({ isAuthenticated, login }) => {
  return (
    <div className={styles.mainScreen}>
      <Router>
        <StagePlans path="stage-plans" isAuthenticated={isAuthenticated} />
        <Login path="login" login={login} />
      </Router>
    </div>
  );
};

export default MainScreen;

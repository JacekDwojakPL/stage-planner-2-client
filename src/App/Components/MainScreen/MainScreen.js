import React from 'react';
import StagePlans from '../StagePlans/StagePlans';
import { Router } from '@reach/router';

const MainScreen = ({ isAuthenticated }) => {
  return (
    <Router>
      <StagePlans path="stage-plans" isAuthenticated={isAuthenticated} />
    </Router>
  );
};

export default MainScreen;

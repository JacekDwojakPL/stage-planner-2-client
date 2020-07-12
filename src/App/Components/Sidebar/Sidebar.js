import React from 'react';
import PublicSidebar from './partials/PublicSidebar/PublicSidebar.js';
import LoggedInSidebar from './partials/LoggedInSidebar/LoggedInSidebar';

const Sidebar = ({ isAuthenticated, login, logout }) => {
  if (isAuthenticated) {
    return (
      <ul>
        <LoggedInSidebar logout={logout} />
      </ul>
    );
  } else {
    return (
      <ul>
        <PublicSidebar login={login} />
      </ul>
    );
  }
};

export default Sidebar;

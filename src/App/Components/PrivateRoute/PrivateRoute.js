import React from 'react';

const PrivateRoute = ({ Component, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Component />;
  } else {
    return <div>Sorry, you have to log in</div>;
  }
};

export default PrivateRoute;

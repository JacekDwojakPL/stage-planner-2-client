import React from 'react';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const StagePlans = () => {
  return <div>Here are your stage plans!</div>;
};

export default function ProtectedComponent({ isAuthenticated }) {
  return PrivateRoute({ Component: StagePlans, isAuthenticated });
}

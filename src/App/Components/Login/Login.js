import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

const Login = ({ login }) => {
  useEffect(() => {
    function redirect() {
      login();
      setTimeout(() => {
        navigate('/stage-plans');
      }, 1500);
    }

    redirect();
  }, []);
  return <div>This is login component</div>;
};

export default Login;

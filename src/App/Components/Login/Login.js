import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

const signin = () => {
  const data = {
    email: 'dwojak.jacek@gmail.com',
    password: 'Merun#21',
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    credentials: 'include',
  };

  return new Promise((resolve, reject) => {
    fetch('http://localhost:60703/signin', options)
      .then((data) => {
        return data.json();
      })
      .then((json) => resolve(json))
      .catch(reject);
  });
};

const Login = ({ login }) => {
  const clickHandler = (event) => {
    signin().then((data) => {
      login(data);
      navigate('/');
    });
  };
  return <div onClick={clickHandler}>This is login component</div>;
};

export default Login;

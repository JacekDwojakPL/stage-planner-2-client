import React, { useState } from 'react';
import { navigate } from '@reach/router';

const signin = (loginData) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginData),
    credentials: 'include',
  };

  return new Promise((resolve, reject) => {
    fetch('http://localhost:60703/signin', options)
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        } else {
          return reject('invalid email or password');
        }
      })
      .then((json) => resolve(json))
      .catch(reject);
  });
};

const Login = ({ login }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (event) => {
    const newCredentials = loginCredentials;
    newCredentials[event.target.name] = event.target.value;
    setLoginCredentials(newCredentials);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signin(loginCredentials).then((data) => {
      login(data);
      navigate('/');
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email-input">
        E-mail
        <input
          type="text"
          id="email-input"
          required
          onChange={inputHandler}
          name="email"
          placeholder="e-mail"
        />
      </label>
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          required
          onChange={inputHandler}
          name="password"
          placeholder="password"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return { isAuthenticated: true };
  }

  if (action.type === 'LOGOUT') {
    return { isAuthenticated: false };
  }
  return state;
};

const useAuthentication = () => {
  const [state, dispatch] = useReducer(reducer, { isAuthenticated: false });

  const login = () => {
    dispatch({ type: 'LOGIN' });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const isAuthenticated = () => {
    return state.isAuthenticated;
  };

  return { login, logout, isAuthenticated };
};

export default useAuthentication;

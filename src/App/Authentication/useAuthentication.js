import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'LOGIN') {
    console.log('PAYLOAD', action.payload);
    return { isAuthenticated: true };
  }

  if (action.type === 'LOGOUT') {
    return { isAuthenticated: false };
  }
  return state;
};

const useAuthentication = () => {
  const [state, dispatch] = useReducer(reducer, { isAuthenticated: false });

  const login = (data) => {
    dispatch({ type: 'LOGIN', payload: data });
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

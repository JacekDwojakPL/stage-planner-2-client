import { useReducer } from 'react';
import { init, addNewInstrument } from './StateManager';

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const newState = addNewInstrument(state, action);
    return { ...newState };
  }
  return state;
};

export const useInstrumentReducer = () => {
  return useReducer(reducer, init());
};

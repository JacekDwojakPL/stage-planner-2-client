import { useReducer } from 'react';
import {
  init,
  addNewInstrument,
  addNewInstrumentByClick,
} from './StateManager';

const reducer = (state, action) => {
  if (action.type === 'ADD_BY_INPUT') {
    const newState = addNewInstrument(state, action);
    return { ...newState };
  }

  if (action.type === 'ADD_BY_CLICK') {
    const newState = addNewInstrumentByClick(state, action);

    return { ...newState };
  }
  return state;
};

export const useInstrumentReducer = () => {
  return useReducer(reducer, init());
};

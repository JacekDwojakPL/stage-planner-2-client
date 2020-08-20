import { useReducer } from 'react';
import { init, addNewInstrumentByClick, addInstrument } from './StateManager';

const reducer = (state, action) => {
  if (action.type === 'ADD_BY_CLICK') {
    return { ...addNewInstrumentByClick(state, action) };
  }

  if (action.type === 'ADD_BY_INPUT') {
    return { ...addInstrument(state, action) };
  }

  if (action.type === 'ENTER_INSERT_MODE') {
    return { ...state, mode: 'INSERT' };
  }

  if (action.type === 'ENTER_EDIT_MODE') {
    return {
      ...state,
      mode: 'EDIT',
      selected: action.payload.instrument ? action.payload.instrument : {},
    };
  }

  return state;
};

export const useInstrumentReducer = (dimensions) => {
  return useReducer(reducer, init(dimensions));
};

import { useReducer } from 'react';
import {
  init,
  addNewInstrument,
  addNewInstrumentByClick,
  updateInstrument,
} from './StateManager';

const reducer = (state, action) => {
  if (action.type === 'ADD_BY_INPUT') {
    return { ...addNewInstrument(state, action) };
  }

  if (action.type === 'ADD_BY_CLICK') {
    return { ...addNewInstrumentByClick(state, action) };
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

  if (action.type === 'UPDATE_INSTRUMENT') {
    return { ...updateInstrument(state, action) };
  }
  return state;
};

export const useInstrumentReducer = () => {
  return useReducer(reducer, init());
};

import { useReducer } from 'react';
import {
  init,
  addNewInstrumentByClick,
  addInstrument,
  selectInstrument,
  updateInstrument,
} from './StateManager';

const reducer = (state, action) => {
  if (action.type === 'ADD_BY_CLICK') {
    return { ...addNewInstrumentByClick(state, action) };
  }

  if (action.type === 'ADD_BY_INPUT') {
    return { ...addInstrument(state, action) };
  }

  if (action.type === 'SELECT_INSTRUMENT') {
    return { ...selectInstrument(state, action) };
  }

  if (action.type === 'UPDATE_INSTRUMENT') {
    return { ...updateInstrument(state, action) };
  }

  if (action.type === 'CHANGE_WIDTH') {
    return {
      ...state,
      dimensions: { ...state.dimensions, width: action.payload.width },
    };
  }

  if (action.type === 'CHANGE_HEIGHT') {
    return {
      ...state,
      dimensions: { ...state.dimensions, height: action.payload.height },
    };
  }

  if (action.type === 'CHANGE_ZOOM') {
    return {
      ...state,
      dimensions: { ...state.dimensions, zoom: action.payload.zoom },
    };
  }

  return state;
};

export const useInstrumentReducer = () => {
  const dimensions = {
    width: 18,
    height: 15,
    unit: 5,
    zoom: 100,
  };
  return useReducer(reducer, init(dimensions));
};

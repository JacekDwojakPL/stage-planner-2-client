import { useReducer } from 'react';
import prepareInitialState from './initialState';

const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const {
      payload: {
        instrument: { name, type },
      },
    } = action;
    const newState = state;
    newState.instrumentTypes[type] = state.instrumentTypes[type].map(
      (instrument) => {
        if (instrument.name === name) {
          return action.payload.instrument;
        } else {
          return instrument;
        }
      }
    );

    return { ...newState };
  }
  return state;
};

export const useInstrumentReducer = () => {
  return useReducer(reducer, prepareInitialState());
};

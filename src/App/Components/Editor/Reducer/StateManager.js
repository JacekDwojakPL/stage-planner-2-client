import { instrumentList } from './instrumentList';
import {
  convertPositionToSVG,
  convertPositionFromSVG,
} from '../../../../lib/PositionCalculator';
import { v4 as uuidv4 } from 'uuid';

function StateManagerFactory() {
  this.init = (dimensions) => {
    const initialState = {
      instruments: [],
      mode: 'INSERT',
      dimensions,
    };

    return initialState;
  };

  this.addInstrument = (state, action) => {
    console.log(action);
    const filteredInstruments = state.instruments.filter(
      ({ name }) => name !== action.payload.name
    );
    const [newInstrument] = instrumentList.filter(
      ({ name }) => name === action.payload.name
    );

    for (let i = 0; i < action.payload.count; i++) {
      filteredInstruments.push(newInstrument);
    }

    return { ...state, instruments: filteredInstruments };
  };

  this.addNewInstrumentByClick = (state, action) => {
    if (state.instruments === undefined) {
      state.instruments = [];
    }

    state.instruments.push(action.payload);

    return { ...state };
  };
}

export const {
  init,
  addNewInstrumentByClick,
  addInstrument,
} = new StateManagerFactory();

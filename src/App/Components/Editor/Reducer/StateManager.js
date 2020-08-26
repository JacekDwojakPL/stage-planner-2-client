import { instrumentList } from './instrumentList';
import {
  convertPositionToSVG,
  convertPositionFromSVG,
  calculateViolinPosition,
} from '../../../../lib/PositionCalculator';
import { v4 as uuidv4 } from 'uuid';

function StateManagerFactory() {
  this.init = (dimensions) => {
    const initialState = {
      instruments: [],
      dimensions,
      selected: null,
    };

    return initialState;
  };

  this.addInstrument = (state, action) => {
    const filteredInstruments = state.instruments.filter(
      ({ name }) => name !== action.payload.name
    );
    const [newInstrument] = instrumentList.filter(
      ({ name }) => name === action.payload.name
    );

    for (let i = 0; i < action.payload.count; i++) {
      filteredInstruments.push({
        ...newInstrument,
        ...calculateViolinPosition(i, state.dimensions),
        instrument_number: i + 1,
        id: uuidv4(),
      });
    }

    return { ...state, instruments: filteredInstruments, selected: null };
  };

  this.addNewInstrumentByClick = (state, action) => {
    if (state.instruments === undefined) {
      state.instruments = [];
    }

    state.instruments.push(action.payload);

    return { ...state, selected: null };
  };

  this.selectInstrument = (state, action) => {
    return { ...state, selected: action.payload.instrument };
  };

  this.updateInstrument = (state, action) => {
    const filteredInstruments = state.instruments.filter(
      ({ id }) => id !== action.payload.id
    );
    filteredInstruments.push(action.payload);

    return {
      ...state,
      instruments: filteredInstruments,
      selected: action.payload,
    };
  };
}

export const {
  init,
  addNewInstrumentByClick,
  addInstrument,
  selectInstrument,
  updateInstrument,
} = new StateManagerFactory();

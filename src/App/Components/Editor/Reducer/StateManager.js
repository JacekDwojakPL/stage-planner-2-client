import { instrumentList } from './instrumentList';
import {
  convertPositionToSVG,
  convertPositionFromSVG,
  calculateViolinPosition,
  calculatePosition,
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
        ...calculateViolinPosition(i, state.dimensions, newInstrument.name),
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
    let { x: svgX, y: svgY, svgRef } = action.payload;
    let { x, y } = calculatePosition({ x: svgX, y: svgY }, svgRef);

    const newInstrument = {
      name: 'instrument',
      id: uuidv4(),
      x: convertPositionFromSVG(x),
      y: convertPositionFromSVG(y),
      standNumber: 1,
    };
    state.instruments.push(newInstrument);

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

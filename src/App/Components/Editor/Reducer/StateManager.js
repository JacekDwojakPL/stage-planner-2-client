import { instrumentList } from './instrumentList';
import {
  convertPositionToSVG,
  convertPositionFromSVG,
} from '../../../../lib/PositionCalculator';
import { v4 as uuidv4 } from 'uuid';

function StateManagerFactory() {
  this.init = (dimensions) => {
    const initialState = {
      instrumentTypes: {},
      instruments: [],
      mode: 'INSERT',
      selected: {},
      dimensions,
    };

    for (let i = 0; i < instrumentList.length; i++) {
      instrumentList[i].count = 0;

      if (initialState.instrumentTypes[instrumentList[i].type] === undefined) {
        initialState.instrumentTypes[instrumentList[i].type] = [];
      }

      initialState.instrumentTypes[instrumentList[i].type].push(
        instrumentList[i]
      );
    }

    return initialState;
  };

  this.addNewInstrument = (state, action) => {
    const {
      payload: {
        instrument: { name, type },
      },
    } = action;
    state.instrumentTypes[type] = state.instrumentTypes[type].map(
      (instrument) => {
        if (instrument.name === name) {
          return action.payload.instrument;
        } else {
          return instrument;
        }
      }
    );
    return this._updateInstrumentsList(state);
  };

  this._updateInstrumentsList = (state) => {
    console.log(state.dimensions);
    state.instruments = [];
    for (const type in state.instrumentTypes) {
      const instrumentList = state.instrumentTypes[type];
      for (const instrument in instrumentList) {
        const { name, count, short_name } = instrumentList[instrument];
        for (let i = 0; i < count; i++) {
          state.instruments.push(
            this._calculateInstrumentPosition(
              state.dimensions,
              name,
              i + 1,
              short_name,
              count
            )
          );
        }
      }
    }

    return { ...state };
  };

  this._calculateInstrumentPosition = (
    dimensions,
    name,
    instrumentNumber,
    short_name,
    count
  ) => {
    const { x, y } = convertPositionFromSVG({
      x: dimensions.width,
      y: dimensions.height,
    });

    const start_x = x / 2 - 0.5;
    const end_x = 2;
    const start_y = y - 1.5;
    const end_y = start_y - 1;

    if (short_name.replace(' ', '').toLowerCase() === 'vni') {
      return {
        x:
          instrumentNumber % 2 === 0
            ? convertPositionToSVG(start_x - (instrumentNumber - 1))
            : convertPositionToSVG(start_x - instrumentNumber),
        y:
          instrumentNumber % 2 !== 0
            ? convertPositionToSVG(start_y)
            : convertPositionToSVG(end_y),
        id: uuidv4(),
        name,
        standNumber: instrumentNumber / 2 + 1,
      };
    }
  };

  this.addNewInstrumentByClick = (state, action) => {
    if (state.instruments === undefined) {
      state.instruments = [];
    }

    state.instruments.push(action.payload.instrument);

    return { ...state };
  };

  this.updateInstrumentPosition = (state, action) => {
    state.instruments.map((instrument) => {
      if (instrument.id === action.payload.id) {
        instrument.x = action.payload.x;
        instrument.y = action.payload.y;
      }
    });
    return { ...state };
  };
}

export const {
  init,
  addNewInstrument,
  addNewInstrumentByClick,
  updateInstrumentPosition,
} = new StateManagerFactory();

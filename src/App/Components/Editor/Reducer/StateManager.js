import { instrumentList } from './instrumentList';

function StateManagerFactory() {
  this.init = () => {
    const initialState = {};

    for (let i = 0; i < instrumentList.length; i++) {
      instrumentList[i].count = 0;
      if (initialState.instrumentTypes === undefined) {
        initialState.instrumentTypes = {};
      }

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
    return this._updateInstrumentsList(newState);
  };

  this._updateInstrumentsList = (state) => {
    state.instruments = [];
    for (const type in state.instrumentTypes) {
      const instrumentList = state.instrumentTypes[type];
      for (const instrument in instrumentList) {
        const { name, count } = instrumentList[instrument];
        for (let i = 0; i < count; i++) {
          state.instruments.push({
            name,
            id: Math.random(),
            x: 0,
            y: 0,
            standNumber: i + 1,
          });
        }
      }
    }

    return { ...state };
  };
}

export const { init, addNewInstrument } = new StateManagerFactory();

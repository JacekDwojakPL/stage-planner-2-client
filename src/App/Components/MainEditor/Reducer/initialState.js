import { instrumentList } from './instrumentList';

const prepareInitialState = () => {
  const output = {};

  for (let i = 0; i < instrumentList.length; i++) {
    instrumentList[i].count = 0;
    if (output.instrumentTypes === undefined) {
      output.instrumentTypes = {};
    }

    if (output.instrumentTypes[instrumentList[i].type] === undefined) {
      output.instrumentTypes[instrumentList[i].type] = [];
    }

    output.instrumentTypes[instrumentList[i].type].push(instrumentList[i]);
  }

  return output;
};

export default prepareInitialState;

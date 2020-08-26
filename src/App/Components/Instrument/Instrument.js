import React from 'react';

const Instrument = (data) => {
  return (
    <circle
      cx={data.converted_x}
      cy={data.converted_y}
      r="15"
      fill="red"
      onClick={(event) => {
        event.stopPropagation();
        data.selectInstrument({ instrument: data });
      }}
    />
  );
};

export default Instrument;

import React, { useRef } from 'react';

const Instrument = (data) => {
  return (
    <circle
      cx={data.x}
      cy={data.y}
      r="20"
      fill="red"
      stroke="black"
      strokeWidth="3"
    />
  );
};

export default Instrument;

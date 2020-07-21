import React, { useRef } from 'react';

const Instrument = ({ position }) => {
  return (
    <circle
      cx={position.x}
      cy={position.y}
      r="25"
      fill="red"
      stroke="black"
      strokeWidth="3"
    />
  );
};

export default Instrument;

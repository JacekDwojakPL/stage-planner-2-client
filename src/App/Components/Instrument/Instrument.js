import React, { useRef } from 'react';

const Instrument = ({ position: { x, y } }) => {
  return (
    <circle cx={x} cy={y} r="20" fill="red" stroke="black" strokeWidth="3" />
  );
};

export default Instrument;

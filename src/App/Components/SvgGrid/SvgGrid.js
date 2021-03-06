import React from 'react';

const SvgGrid = () => {
  const unit = 5;
  return (
    <>
      <defs>
        <pattern
          id="small-grid"
          width={unit}
          height={unit}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${unit} 0 L 0 0 0 ${unit}`}
            fill="none"
            stroke="gray"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="grid"
          width={`${unit * 10}`}
          height={`${unit * 10}`}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={`${unit * 10}`}
            height={`${unit * 10}`}
            fill="url(#small-grid)"
          />
          <path
            d={`M ${unit * 10} 0 L 0 0 0 ${unit * 10}`}
            stroke="gray"
            fill="none"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </>
  );
};

export default SvgGrid;

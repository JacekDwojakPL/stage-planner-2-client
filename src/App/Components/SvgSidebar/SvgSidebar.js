import React, { useState } from 'react';

const instruments = [
  'Fl',
  'Cl',
  'Ob',
  'Fg',
  'Cr',
  'Tr',
  'Tbn',
  'Tb',
  'Vn I',
  'Vn II',
  'Vla',
  'Vc',
  'Cb',
];

const SvgSidebar = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div
      style={{
        display: display ? 'block' : 'none',
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 2,
        gridRowEnd: 3,
      }}
    >
      <button onClick={() => setDisplay(!display)}>
        {display ? 'Hide' : 'Show'}
      </button>
      {instruments.map((instrument) => {
        return (
          <div key={Math.random()} style={{ paddingBottom: '.75em' }}>
            <input
              type="text"
              id={`${instrument}-input`}
              placeholder={instrument}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SvgSidebar;

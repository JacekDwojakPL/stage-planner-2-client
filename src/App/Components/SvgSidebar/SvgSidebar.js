import React from 'react';

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
  return (
    <div>
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

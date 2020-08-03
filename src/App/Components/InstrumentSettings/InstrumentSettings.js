import React, { useState, useEffect } from 'react';
import {
  convertPositionFromSVG,
  convertPositionToSVG,
} from '../../../lib/PositionCalculator';

const InstrumentSettings = ({ x, y, name, id, updateInstrument }) => {
  const [position, setPosition] = useState(convertPositionFromSVG({ x, y }));
  useEffect(() => {
    setPosition(convertPositionFromSVG({ x, y }));
  }, [x, y]);
  if (x && y && name) {
    const changeHandler = (event) => {
      position[event.target.name] = event.target.value;
      setPosition({ ...position });
    };

    return (
      <div className="edit-div">
        <label htmlFor="instrument-name">
          Instrument name
          <input type="text" id="instrument-name" value={name} name="name" />
        </label>
        <label htmlFor="x-position">
          X position:
          <input
            type="text"
            id="x-position"
            value={position.x}
            name="x"
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="y-position">
          Y position:
          <input
            type="text"
            id="y-position"
            value={position.y}
            name="y"
            onChange={changeHandler}
          />
        </label>
        <button
          onClick={() =>
            updateInstrument({
              payload: {
                x: convertPositionToSVG(position.x),
                y: convertPositionToSVG(position.y),
                name,
                id,
              },
            })
          }
        >
          Update
        </button>
      </div>
    );
  }
  return <div>Select instrument to edit</div>;
};

export default InstrumentSettings;

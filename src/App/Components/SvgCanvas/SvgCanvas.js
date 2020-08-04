import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculatePosition } from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({
  dimensions: { width, height, unit },
  instruments,
  actions: { addInstrumentByClick, changeMode },
}) => {
  const svgRef = useRef(null);

  const clickHandler = (event) => {
    const newInstrument = {
      name: 'instrument',
      id: uuidv4(),
      ...calculatePosition(event, svgRef),
      standNumber: 1,
    };

    addInstrumentByClick(newInstrument);
  };
  const styles = {
    width: `${width + 1}px`,
    height: `${height + 1}px`,
  };
  return (
    <svg
      ref={svgRef}
      width={`${width + 1}`}
      height={`${height + 1}`}
      onClick={clickHandler}
    >
      <SvgGrid unit={unit} />
      {instruments.map((instrument) => (
        <Instrument {...{ ...instrument, changeMode }} key={instrument.id} />
      ))}
    </svg>
  );
};

export default SvgCanvas;

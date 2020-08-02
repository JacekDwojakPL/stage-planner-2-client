import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { calculatePosition } from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({
  dimensions: { width, height },
  instruments,
  addInstrumentByClick,
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

  console.log(instruments);
  return (
    <svg
      width="100%"
      ref={svgRef}
      className={styles.svgCanvas}
      viewBox={`0 0 ${width + 1} ${height + 1}`}
      onClick={clickHandler}
    >
      <SvgGrid unit="5" />
      {instruments.map(({ x, y }) => (
        <Instrument position={{ x, y }} />
      ))}
    </svg>
  );
};

export default SvgCanvas;

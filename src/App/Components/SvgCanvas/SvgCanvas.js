import React, { useRef, useLayoutEffect, useState } from 'react';
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

  return (
    <div className={styles.svgCanvas}>
      <svg
        ref={svgRef}
        onClick={clickHandler}
        width="100%"
        viewBox={`0 0 ${width + 1} ${height + 1}`}
      >
        <SvgGrid unit={unit} width={width} height={height} />
        {instruments.map((instrument) => (
          <Instrument {...{ ...instrument, changeMode }} key={instrument.id} />
        ))}
      </svg>
    </div>
  );
};

export default SvgCanvas;

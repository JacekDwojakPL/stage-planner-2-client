import React, { useRef, useLayoutEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  calculatePosition,
  convertPositionToSVG,
  convertPositionFromSVG,
} from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({
  dimensions: { width, height, unit, zoom },
  instruments,
  actions: { addInstrumentByClick },
}) => {
  const svgRef = useRef(null);

  const clickHandler = (event) => {
    let newPosition = convertPositionFromSVG({
      ...calculatePosition(event, svgRef),
      unit: 5,
    });

    const newInstrument = {
      name: 'instrument',
      id: uuidv4(),
      ...newPosition,
      standNumber: 1,
    };

    addInstrumentByClick(newInstrument);
  };

  return (
    <div className={styles.svgCanvas}>
      <svg
        ref={svgRef}
        onClick={clickHandler}
        width={`${zoom}%`}
        viewBox={`0 0 ${width + 1} ${height + 1}`}
      >
        <SvgGrid unit={unit} width={width} height={height} />
        {instruments.map((instrument) => {
          console.log({
            ...instrument,
            x: convertPositionToSVG(instrument.x),
            y: convertPositionToSVG(instrument.y),
          });
          return (
            <Instrument
              {...{
                ...instrument,
                x: convertPositionToSVG(instrument.x),
                y: convertPositionToSVG(instrument.y),
              }}
              key={instrument.id}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SvgCanvas;

import React, { useRef } from 'react';
import { convertPositionToSVG } from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({
  dimensions: { width, height, unit, zoom },
  instruments,
  actions: { addInstrumentByClick, selectInstrument },
}) => {
  const svgRef = useRef(null);

  const clickHandler = (event) => {
    addInstrumentByClick({ x: event.clientX, y: event.clientY, svgRef });
  };

  return (
    <div className={styles.svgCanvas} tabIndex={0}>
      <svg
        ref={svgRef}
        onClick={clickHandler}
        width={`${zoom}%`}
        viewBox={`0 0 ${width + 1} ${height + 1}`}
      >
        <SvgGrid unit={unit} width={width} height={height} />
        {instruments.map((instrument) => {
          return (
            <Instrument
              {...{
                ...instrument,
                converted_x: convertPositionToSVG(instrument.x),
                converted_y: convertPositionToSVG(instrument.y),
                selectInstrument,
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

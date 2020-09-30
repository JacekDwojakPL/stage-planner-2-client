import React, { useRef } from 'react';
import { convertPositionToSVG } from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({
  dimensions: { width, height, zoom },
  instruments,
  actions: { addInstrumentByClick, selectInstrument, updateInstrument },
}) => {
  const svgRef = useRef(null);

  const clickHandler = (event) => {
    addInstrumentByClick({ x: event.clientX, y: event.clientY, svgRef });
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorCanvas}>
        <svg
          ref={svgRef}
          onClick={clickHandler}
          width={width + 1}
          height={height + 1}
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: '0% 0%',
          }}
        >
          <SvgGrid />
          {instruments.map((instrument) => {
            return (
              <Instrument
                {...{
                  ...instrument,
                  converted_x: convertPositionToSVG(instrument.x),
                  converted_y: convertPositionToSVG(instrument.y),
                  selectInstrument,
                  updateInstrument,
                  svgRef,
                }}
                key={instrument.id}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default SvgCanvas;

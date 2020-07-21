import React, { useRef, useEffect } from 'react';
import PositionCalculator from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';
import Instrument from '../Instrument/Instrument';

const SvgCanvas = ({ dimensions: { width, height } }) => {
  const svgRef = useRef(null);
  let positionCalculator = null;

  useEffect(() => {
    positionCalculator = PositionCalculator(svgRef);
  }, []);

  const calculatePosition = (event) => {
    return positionCalculator.getPosition(event);
  };

  return (
    <svg
      width="100%"
      ref={svgRef}
      className={styles.svgCanvas}
      viewBox={`0 0 ${width + 1} ${height + 1}`}
    >
      <SvgGrid unit="5" />
      <Instrument position={{ x: 50, y: 25 }} />
    </svg>
  );
};

export default SvgCanvas;

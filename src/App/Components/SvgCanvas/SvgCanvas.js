import React, { useRef, useEffect } from 'react';
import PositionCalculator from '../../../lib/PositionCalculator';
import styles from './SvgCanvas.scss';
import SvgGrid from '../SvgGrid/SvgGrid';

const SvgCanvas = () => {
  const svgRef = useRef(null);
  let positionCalculator = null;

  useEffect(() => {
    positionCalculator = PositionCalculator(svgRef);
  }, []);

  const calculatePosition = (event) => {
    return positionCalculator.getPosition(event);
  };

  return (
    <svg width="100%" height="100%" ref={svgRef} className={styles.svgEditor}>
      <SvgGrid />
    </svg>
  );
};

export default SvgCanvas;

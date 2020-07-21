import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import SvgSidebar from '../SvgSidebar/SvgSidebar';
import styles from './MainEditor.scss';

const MainEditor = () => {
  const [dimensions, setDimenstions] = useState({ width: 1100, height: 600 });

  const calculateDimensions = (event) => {
    console.log(event.target.value);

    const newDimensions = { ...dimensions };
    newDimensions[event.target.name] = (event.target.value / 2) * 100;
    newDimensions.height = newDimensions.width / 2;

    setDimenstions(newDimensions);
  };

  console.log(dimensions);

  return (
    <div className={styles.mainEditor}>
      <SvgCanvas dimensions={dimensions} />
      <SvgSidebar />
      <div style={{ gridColumnStart: 3, gridColumnEnd: 4 }}>
        <input
          type="number"
          min="5"
          max="40"
          name="width"
          placeholder="width"
          onChange={(event) => calculateDimensions(event)}
          value={(dimensions.width / 100) * 2}
        />
      </div>
    </div>
  );
};

export default MainEditor;

import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import SvgSidebar from '../SvgSidebar/SvgSidebar';
import { useInstrumentReducer } from './Reducer/reducer';
import styles from './MainEditor.scss';

const MainEditor = () => {
  const [dimensions, setDimenstions] = useState({ width: 1100, height: 600 });
  const [state, dispatch] = useInstrumentReducer();

  const calculateDimensions = (event) => {
    const newDimensions = { ...dimensions };
    newDimensions[event.target.name] = (event.target.value / 2) * 100;
    newDimensions.height = newDimensions.width / 2;

    setDimenstions(newDimensions);
  };

  const addInstrument = (data) => {
    dispatch({
      type: 'ADD',
      payload: { instrument: data },
    });
  };

  return (
    <div className={styles.mainEditor}>
      <SvgSidebar
        addInstrument={addInstrument}
        instrumentTypes={state.instrumentTypes}
      />
      <SvgCanvas dimensions={dimensions} />
    </div>
  );
};

export default MainEditor;

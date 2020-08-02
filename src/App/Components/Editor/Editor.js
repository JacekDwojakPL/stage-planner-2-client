import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import SvgSidebar from '../SvgSidebar/SvgSidebar';
import { useInstrumentReducer } from './Reducer/reducer';
import styles from './Editor.scss';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DimensionsCalculator from '../../../lib/DimensionsCalculator';

const Editor = () => {
  const [dimensions, setDimenstions] = useState(
    DimensionsCalculator({ width: 22, height: 15 })
  );
  const [state, dispatch] = useInstrumentReducer();

  // const calculateDimensions = (event) => {
  //   const newDimensions = { ...dimensions };
  //   newDimensions[event.target.name] = (event.target.value / 2) * 100;
  //   newDimensions.height = newDimensions.width / 2;

  //   setDimenstions(newDimensions);
  // };

  const addInstrumentByInput = (data) => {
    dispatch({
      type: 'ADD_BY_INPUT',
      payload: { instrument: data },
    });
  };

  const addInstrumentByClick = (data) => {
    dispatch({ type: 'ADD_BY_CLICK', payload: { instrument: data } });
  };

  return (
    <div className={styles.Editor}>
      <SvgSidebar
        addInstrumentByInput={addInstrumentByInput}
        instrumentTypes={state.instrumentTypes}
      />
      <SvgCanvas
        dimensions={dimensions}
        instruments={state.instruments}
        addInstrumentByClick={addInstrumentByClick}
      />
    </div>
  );
};

export default ({ isAuthenticated }) => {
  return PrivateRoute({ Component: Editor, isAuthenticated });
};

import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import SvgSidebar from '../SvgSidebar/SvgSidebar';
import { useInstrumentReducer } from './Reducer/reducer';
import styles from './Editor.scss';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DimensionsCalculator from '../../../lib/DimensionsCalculator';

const Editor = () => {
  const [dimensions, setDimenstions] = useState(
    DimensionsCalculator({ width: 21, height: 15, unit: 5 })
  );
  const [state, dispatch] = useInstrumentReducer(dimensions);
  console.log(state);

  const addInstrumentByInput = (data) => {
    dispatch({
      type: 'ADD_BY_INPUT',
      payload: { instrument: data },
    });
  };

  const addInstrumentByClick = (data) => {
    dispatch({ type: 'ADD_BY_CLICK', payload: { instrument: data } });
  };

  const updateInstrument = (data) => {
    dispatch({ type: 'UPDATE_INSTRUMENT', payload: data.payload });
  };

  const changeMode = (data) => {
    if (data.newMode === 'INSERT') {
      dispatch({ type: 'ENTER_INSERT_MODE', payload: data.payload });
    }

    if (data.newMode === 'EDIT') {
      dispatch({ type: 'ENTER_EDIT_MODE', payload: data.payload });
    }
  };

  return (
    <div className={styles.Editor}>
      <SvgSidebar
        actions={{ addInstrumentByInput, changeMode, updateInstrument }}
        {...{ ...state }}
      />
      <SvgCanvas
        dimensions={dimensions}
        instruments={state.instruments}
        actions={{ addInstrumentByClick, changeMode }}
      />
    </div>
  );
};

export default ({ isAuthenticated }) => {
  return PrivateRoute({ Component: Editor, isAuthenticated });
};

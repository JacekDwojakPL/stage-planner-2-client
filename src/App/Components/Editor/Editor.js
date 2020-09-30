import React from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import Workbar from '../Workbar/Workbar';
import { useInstrumentReducer } from './Reducer/reducer';
import { instrumentList } from './Reducer/instrumentList';
import styles from './Editor.scss';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DimensionsCalculator from '../../../lib/DimensionsCalculator';

const TypesButtons = (clickHandler) => {
  const [...instrumentTypes] = new Set(
    instrumentList.map((instrument) => instrument.type)
  );

  return instrumentTypes.map((type) => {
    return (
      <button onClick={() => clickHandler(type)} key={type}>
        {type}
      </button>
    );
  });
};

const Editor = () => {
  const [state, dispatch] = useInstrumentReducer();

  const addInstrumentByInput = (data) => {
    dispatch({
      type: 'ADD_BY_INPUT',
      payload: { ...data },
    });
  };

  const addInstrumentByClick = (data) => {
    dispatch({ type: 'ADD_BY_CLICK', payload: data });
  };

  const selectInstrument = (data) => {
    dispatch({ type: 'SELECT_INSTRUMENT', payload: data });
  };

  const updateInstrument = (data) => {
    dispatch({ type: 'UPDATE_INSTRUMENT', payload: data });
  };

  const changeDimensions = (data) => {
    dispatch({
      type: data.type,
      payload: { [data.dimension]: data.value },
    });
  };
  console.log(state);
  return (
    <div className={styles.Editor}>
      <Workbar
        instrumentList={instrumentList}
        addInstrumentByInput={addInstrumentByInput}
        updateInstrument={updateInstrument}
        changeDimensions={changeDimensions}
        {...state}
      />
      <SvgCanvas
        dimensions={DimensionsCalculator({ ...state.dimensions })}
        instruments={state.instruments}
        actions={{ addInstrumentByClick, selectInstrument, updateInstrument }}
      />
    </div>
  );
};

export default ({ isAuthenticated }) => {
  return PrivateRoute({ Component: Editor, isAuthenticated });
};

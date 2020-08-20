import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
import { useInstrumentReducer } from './Reducer/reducer';
import { instrumentList } from './Reducer/instrumentList';
import styles from './Editor.scss';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DimensionsCalculator from '../../../lib/DimensionsCalculator';

const [...instrumentTypes] = new Set(
  instrumentList.map((instrument) => instrument.type)
);

const Editor = () => {
  const [dimensions, setDimenstions] = useState({
    width: 18,
    height: 15,
    unit: 5,
    zoom: 100,
  });
  const [state, dispatch] = useInstrumentReducer(dimensions);
  const [activeType, setActiveType] = useState(instrumentTypes[0]);

  const addInstrumentByInput = (data) => {
    dispatch({
      type: 'ADD_BY_INPUT',
      payload: { ...data },
    });
  };

  const addInstrumentByClick = (data) => {
    dispatch({ type: 'ADD_BY_CLICK', payload: data });
  };

  return (
    <div className={styles.Editor}>
      <div className={styles.Sidebar}>
        <input
          type="range"
          max="200"
          min="10"
          step="1"
          value={dimensions.zoom}
          onChange={() => {
            setDimenstions({ ...dimensions, zoom: event.target.value });
          }}
        />
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={dimensions.width}
          onChange={() => {
            setDimenstions({ ...dimensions, width: event.target.value });
          }}
        />
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={dimensions.height}
          onChange={() => {
            setDimenstions({ ...dimensions, height: event.target.value });
          }}
        />
        {instrumentTypes.map((type) => {
          return (
            <button key={type} onClick={() => setActiveType(type)}>
              {type}
            </button>
          );
        })}
        {instrumentList
          .filter(({ type }) => type === activeType)
          .map((instrument) => {
            return (
              <input
                key={instrument.name}
                placeholder={instrument.name}
                type="text"
                onChange={(event) =>
                  addInstrumentByInput({
                    ...instrument,
                    count: event.target.value,
                  })
                }
                value={
                  state.instruments.filter(
                    ({ name }) => name === instrument.name
                  ).length
                }
              />
            );
          })}
      </div>
      <SvgCanvas
        dimensions={DimensionsCalculator({ ...dimensions })}
        instruments={state.instruments}
        actions={{ addInstrumentByClick }}
      />
    </div>
  );
};

export default ({ isAuthenticated }) => {
  return PrivateRoute({ Component: Editor, isAuthenticated });
};

import React, { useState } from 'react';
import SvgCanvas from '../SvgCanvas/SvgCanvas';
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
  const [activeType, setActiveType] = useState('string');
  console.log(state);

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

  return (
    <div className={styles.Editor}>
      <div className={styles.Sidebar}>
        <input
          type="range"
          max="200"
          min="10"
          step="1"
          value={state.dimensions.zoom}
          onChange={() => {
            dispatch({
              type: 'CHANGE_ZOOM',
              payload: { zoom: event.target.value },
            });
          }}
        />
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={state.dimensions.width}
          onChange={() => {
            dispatch({
              type: 'CHANGE_WIDTH',
              payload: { width: event.target.value },
            });
          }}
        />
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={state.dimensions.height}
          onChange={() => {
            dispatch({
              type: 'CHANGE_HEIGHT',
              payload: { height: event.target.value },
            });
          }}
        />
        {state.selected ? (
          <input
            type="number"
            value={state.selected.x}
            step="0.1"
            onChange={(event) =>
              updateInstrument({
                ...state.selected,
                x: Number(event.target.value),
              })
            }
          />
        ) : null}
        {state.selected ? (
          <input
            type="number"
            value={state.selected.y}
            step="0.1"
            onChange={(event) =>
              updateInstrument({
                ...state.selected,
                y: Number(event.target.value),
              })
            }
          />
        ) : null}
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
        dimensions={DimensionsCalculator({ ...state.dimensions })}
        instruments={state.instruments}
        actions={{ addInstrumentByClick, selectInstrument }}
      />
    </div>
  );
};

export default ({ isAuthenticated }) => {
  return PrivateRoute({ Component: Editor, isAuthenticated });
};

import React, { useState } from 'react';
import styles from './Workbar.scss';

const ADD_MODE = 'add';
const EDIT_MODE = 'edit';
const SETTINGS_MODE = 'settings';

const getState = (instrumentList) => {
  const [...instrumentTypes] = new Set(
    instrumentList.map((instrument) => instrument.type)
  );
  const output = {};
  for (let type of instrumentTypes) {
    output[type] = instrumentList.filter(
      (instrument) => instrument.type === type
    );
  }
  return { ...output, instrumentTypes };
};

const Workbar = (props) => {
  const [mode, setMode] = useState(ADD_MODE);
  const [modal, setModal] = useState(false);

  const clickHandler = (mode) => {
    setMode(mode);
    setModal(!modal);
  };
  return (
    <div className={styles.Workbar}>
      <div className={styles.Buttons}>
        <button onClick={() => clickHandler(ADD_MODE)}>Add</button>
        <button onClick={() => clickHandler(EDIT_MODE)}>Edit</button>
        <button onClick={() => clickHandler(SETTINGS_MODE)}>Settings</button>
      </div>
      <ResultDiv mode={mode} modal={modal} setModal={setModal} {...props} />
    </div>
  );
};

const ResultDiv = (props) => {
  const buttons = getState(props.instrumentList);
  const [activeType, setActiveType] = useState('string');
  return (
    <div className={`${styles.ResultDiv} ${props.modal ? styles.Modal : ''}`}>
      {props.mode === ADD_MODE
        ? buttons.instrumentTypes.map((type) => (
            <button onClick={() => setActiveType(type)}>{type}</button>
          ))
        : null}
      {props.mode === ADD_MODE
        ? buttons[activeType].map((instrument) => {
            return (
              <input
                key={instrument.name}
                placeholder={instrument.name}
                type="text"
                onChange={(event) =>
                  props.addInstrumentByInput({
                    ...instrument,
                    count: event.target.value,
                  })
                }
                value={
                  props.instruments.filter(
                    ({ name }) => name === instrument.name
                  ).length
                }
              />
            );
          })
        : null}
      {props.mode === EDIT_MODE ? (
        <input
          type="number"
          value={props.selected ? props.selected.x : 0}
          step="0.1"
          onChange={(event) => {
            if (props.selected) {
              props.updateInstrument({
                ...props.selected,
                x: Number(event.target.value).toFixed(2),
              });
            }
          }}
        />
      ) : null}
      {props.mode === EDIT_MODE ? (
        <input
          type="number"
          value={props.selected ? props.selected.y : 0}
          step="0.1"
          onChange={(event) => {
            if (props.selected) {
              props.updateInstrument({
                ...props.selected,
                y: Number(event.target.value).toFixed(2),
              });
            }
          }}
        />
      ) : null}
      {props.mode === SETTINGS_MODE ? (
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={props.dimensions.width}
          onChange={(event) => {
            props.changeDimensions({
              type: 'CHANGE_WIDTH',
              dimension: 'width',
              value: event.target.value,
            });
          }}
        />
      ) : null}
      {props.mode === SETTINGS_MODE ? (
        <input
          type="range"
          max="50"
          min="5"
          step="1"
          value={props.dimensions.height}
          onChange={(event) => {
            props.changeDimensions({
              type: 'CHANGE_HEIGHT',
              dimension: 'height',
              value: event.target.value,
            });
          }}
        />
      ) : null}
      {props.mode === SETTINGS_MODE ? (
        <input
          type="range"
          max="200"
          min="10"
          step="1"
          value={props.dimensions.zoom}
          onChange={(event) => {
            props.changeDimensions({
              type: 'CHANGE_ZOOM',
              dimension: 'zoom',
              value: event.target.value,
            });
          }}
        />
      ) : null}
      {props.mode}
      <button
        className={styles.CloseButton}
        onClick={() => props.setModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default Workbar;

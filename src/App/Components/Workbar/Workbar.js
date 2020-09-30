import React, { useState } from 'react';
import styles from './Workbar.scss';

const ADD_MODE = 'add';
const EDIT_MODE = 'edit';
const SETTINGS_MODE = 'settings';

const getState = instrumentList => {
  const [...instrumentTypes] = new Set(
    instrumentList.map((instrument) => instrument.type)
  );
  const output = {};
  for(let type of instrumentTypes) {
    output[type] = instrumentList.filter(instrument => instrument.type === type)
  }
  return {...output, instrumentTypes}
}

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
      <ResultDiv
        mode={mode}
        modal={modal}
        setModal={setModal}
        {...props}
      />
    </div>
  );
};

const ResultDiv = (props) => {
  const buttons = getState(props.instrumentList);
  const [activeType, setActiveType] = useState('string')
  return (
    <div
      className={`${styles.ResultDiv} ${
        props.modal ? styles.Modal : ''
      }`}
    >
      {props.mode === ADD_MODE ? buttons.instrumentTypes.map(type => <button onClick={() => setActiveType(type)}>{type}</button>) : null}
      {props.mode === ADD_MODE ? props.instrumentList.filter(({ type }) => type === activeType).map((instrument) => {
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
          }) : null}
      {props.mode}
      <button className={styles.CloseButton} onClick={() =>  props.setModal(false)}>Close</button>
    </div>
  );
};

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

export default Workbar;

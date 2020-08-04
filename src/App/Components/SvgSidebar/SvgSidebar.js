import React, { useState } from 'react';
import styles from './SvgSidebar.scss';
import InstrumentsList from '../InstrumentsList/InstrumentsList';
import InstrumentSettings from '../InstrumentSettings/InstrumentSettings';

const SvgSidebar = ({
  actions: { addInstrumentByInput, changeMode, updateInstrument },
  instrumentTypes,
  mode,
  selected,
}) => {
  return (
    <div className={styles.svgSidebar}>
      <button
        onClick={() => changeMode({ newMode: 'INSERT', payload: {} })}
        className={mode === 'INSERT' ? styles.active : null}
      >
        Add
      </button>
      <button
        onClick={() => changeMode({ newMode: 'EDIT', payload: {} })}
        className={mode === 'EDIT' ? styles.active : null}
      >
        Edit
      </button>
      {mode === 'INSERT' ? (
        <InstrumentsList
          addInstrumentByInput={addInstrumentByInput}
          instrumentTypes={instrumentTypes}
        />
      ) : (
        <InstrumentSettings {...{ ...selected, updateInstrument }} />
      )}
    </div>
  );
};

export default SvgSidebar;

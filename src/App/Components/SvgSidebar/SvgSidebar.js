import React, { useState } from 'react';
import styles from './SvgSidebar.scss';
import InstrumentsList from '../InstrumentsList/InstrumentsList';
import InstrumentSettings from '../InstrumentSettings/InstrumentSettings';

const SvgSidebar = ({ addInstrumentByInput, instrumentTypes }) => {
  const [activeTab, setActiveTab] = useState([true, false]);

  return (
    <div className={styles.svgSidebar}>
      <button
        onClick={() => setActiveTab([true, false])}
        className={activeTab[0] ? styles.active : null}
      >
        Add
      </button>
      <button
        onClick={() => setActiveTab([false, true])}
        className={activeTab[1] ? styles.active : null}
      >
        Edit
      </button>
      {activeTab[0] ? (
        <InstrumentsList
          addInstrumentByInput={addInstrumentByInput}
          instrumentTypes={instrumentTypes}
        />
      ) : (
        <InstrumentSettings />
      )}
    </div>
  );
};

export default SvgSidebar;

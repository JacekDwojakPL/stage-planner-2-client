import React, { useState } from 'react';
import styles from './InstrumentsList.scss';

const InstrumentsList = ({ addInstrument, instrumentTypes }) => {
  const [active, setInstruments] = useState(Object.keys(instrumentTypes)[0]);
  const changeInstruments = (name) => setInstruments(name);

  return (
    <div className={styles.instrumentsList}>
      {Object.keys(instrumentTypes).map((type) => {
        return <button onClick={() => changeInstruments(type)}>{type}</button>;
      })}

      {instrumentTypes[active].map((instrument) => {
        return (
          <InstrumentInput
            instrument={instrument}
            addInstrument={addInstrument}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

const InstrumentInput = ({ instrument, addInstrument }) => {
  const insertInstrument = (event) => {
    addInstrument({ ...instrument, count: Number(event.target.value) });
  };
  return (
    <input
      type="text"
      id={`${instrument.name}-input`}
      placeholder={instrument.name}
      key={Math.random()}
      onChange={insertInstrument}
      value={instrument.count}
    />
  );
};
export default InstrumentsList;

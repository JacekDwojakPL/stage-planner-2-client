import React, { useState } from 'react';
import styles from './InstrumentsList.scss';

const InstrumentsList = ({ addInstrumentByInput, instrumentTypes }) => {
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
            addInstrumentByInput={addInstrumentByInput}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

const InstrumentInput = ({ instrument, addInstrumentByInput }) => {
  return (
    <label
      htmlFor={`${instrument.name}-input`}
      className={styles.instrumentLabel}
    >
      {instrument.name}{' '}
      <input
        type="text"
        id={`${instrument.name}-input`}
        placeholder={instrument.name}
        key={Math.random()}
        onChange={(event) =>
          addInstrumentByInput({
            ...instrument,
            count: Number(event.target.value),
          })
        }
        value={instrument.count}
      />
    </label>
  );
};
export default InstrumentsList;

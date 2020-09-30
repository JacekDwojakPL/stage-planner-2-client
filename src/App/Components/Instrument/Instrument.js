import React, { useState, useRef } from 'react';

const Instrument = (data) => {
  const instrumentRef = useRef(null);
  const [isMoving, setMoving] = useState(false);

  return (
    <circle
      cx={data.converted_x}
      cy={data.converted_y}
      r="15"
      fill="red"
      onClick={(event) => {
        event.stopPropagation();
        data.selectInstrument({ instrument: data });
      }}
      onMouseDown={() => {
        setMoving(true);
      }}
      onMouseUp={(event) => {
        event.stopPropagation();
        if (isMoving) {
          data.updateInstrument({
            id: data.id,
            name: data.name,
            standNumber: data.standNumber,
            x: instrumentRef.current.cx.baseVal.value / 50,
            y: instrumentRef.current.cy.baseVal.value / 50,
          });
        }

        setMoving(false);
      }}
      onMouseLeave={(event) => {
        event.stopPropagation();
        setMoving(false);
      }}
      onMouseMove={(event) => {
        if (isMoving) {
          const svgPoint = data.svgRef.current.createSVGPoint();
          svgPoint.x = event.clientX;
          svgPoint.y = event.clientY;
          const { x, y } = svgPoint.matrixTransform(
            data.svgRef.current.getScreenCTM().inverse()
          );
          instrumentRef.current.cx.baseVal.value = x;
          instrumentRef.current.cy.baseVal.value = y;
        }
      }}
      ref={instrumentRef}
    />
  );
};

export default Instrument;

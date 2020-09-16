import offsetMap from './OffsetMapper';

const PositionCalculator = () => {
  console.log(offsetMap);
  return {
    calculatePosition: ({ x, y }, ref) => {
      const svgPoint = ref.current.createSVGPoint();
      svgPoint.x = x;
      svgPoint.y = y;
      let matrix = svgPoint.matrixTransform(
        ref.current.getScreenCTM().inverse()
      );

      return { x: matrix.x, y: matrix.y };
    },
    convertPositionFromSVG: (value, unit = 5) => {
      return value / (unit * 10);
    },
    convertPositionToSVG: (value, unit = 5) => {
      return value * (unit * 10);
    },
    calculateViolinPosition: (instrumentNumber, dimensions, instrumentName) => {
      let startX = dimensions.width / 2 - 1;
      let startY = 14;
      let filtered = offsetMap
        .filter((instrument) => instrument.name === instrumentName)
        .sort((a, b) => (a.instrument_number > b.instrument_number ? 1 : -1));
      // let possiblePositions = [];
      // for (let i = startX; i > 0; i--) {
      //   possiblePositions.push(...[{ x: i - 1 }, { x: i - 1 }]);
      // }
      // possiblePositions = possiblePositions.map((element, index) => {
      //   if (offsetMap[index] !== undefined) {
      //     return {
      //       x: startX - 1 - offsetMap[index].offset_x,
      //       y: dimensions.height - 1 - offsetMap[index].offset_y,
      //     };
      //   } else {
      //     return element;
      //   }
      // });
      const { offsetX, offsetY } = filtered[instrumentNumber];
      return { x: startX - offsetX, y: startY - offsetY };
    },
  };
};

export const {
  calculatePosition,
  convertPositionFromSVG,
  convertPositionToSVG,
  calculateViolinPosition,
} = PositionCalculator();

import offsetMap from './OffsetMapper';

const PositionCalculator = () => {
  return {
    calculatePosition: (event, ref) => {
      const svgPoint = ref.current.createSVGPoint();
      svgPoint.x = event.clientX;
      svgPoint.y = event.clientY;
      let { x, y } = svgPoint.matrixTransform(
        ref.current.getScreenCTM().inverse()
      );

      return { x, y };
    },
    convertPositionFromSVG: ({ x, y, unit = 5 }) => {
      return { x: x / (unit * 10), y: y / (unit * 10) };
    },
    convertPositionToSVG: (value, unit = 5) => {
      return value * (unit * 10);
    },
    calculateViolinPosition: (instrumentNumber, dimensions) => {
      let startX = dimensions.width / 2;
      let possiblePositions = [];
      for (let i = startX; i > 0; i--) {
        possiblePositions.push(...[{ x: i - 1 }, { x: i - 1 }]);
      }
      possiblePositions = possiblePositions
        .map((element, index) => {
          if (index % 2 === 0) {
            return { y: dimensions.height - 1, ...element };
          } else {
            return { y: dimensions.height - 2, ...element };
          }
        })
        .map((element, index) => {
          if (index >= 10 && offsetMap[index] !== undefined) {
            return {
              x: startX - 1 - offsetMap[index].offset_x,
              y: dimensions.height - 1 - offsetMap[index].offset_y,
            };
          } else {
            return element;
          }
        });

      return possiblePositions[instrumentNumber];
    },
  };
};

export const {
  calculatePosition,
  convertPositionFromSVG,
  convertPositionToSVG,
  calculateViolinPosition,
} = PositionCalculator();

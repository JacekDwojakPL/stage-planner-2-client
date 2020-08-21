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
      let startX = dimensions.width / 2 - 1;
      let possiblePositions = [];
      for (startX; startX > 0; startX--) {
        possiblePositions.push(...[{ x: startX - 0.5 }, { x: startX - 0.5 }]);
      }
      possiblePositions = possiblePositions.map((element, index) => {
        if (index % 2 === 0) {
          return { y: dimensions.height - 1.5, ...element };
        } else {
          return { y: dimensions.height - 2.5, ...element };
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

import offsetMap from './OffsetMapper';

const getStartPositions = (dimensions, instrumentName) => {
  let startX = 0;
  let startY = 0;

  switch (instrumentName) {
    case 'Violin I':
      startX = dimensions.width / 2 - 1;
      startY = dimensions.height - 1;
      break;
    case 'Violin II':
      startX = dimensions.width / 2;
      startY = dimensions.height - 3;
      break;
    default:
      startX = dimensions.width / 2 - 1;
      startY = dimensions.height - 2;
      break;
  }
  return { startX, startY };
};

const PositionCalculator = () => {
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
      let { startX, startY } = getStartPositions(dimensions, instrumentName);
      let filtered = offsetMap
        .filter((instrument) => instrument.name === instrumentName)
        .sort((a, b) => (a.instrument_number > b.instrument_number ? 1 : -1));

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

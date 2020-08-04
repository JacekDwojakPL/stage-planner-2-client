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
    convertPositionFromSVG: ({ x, y, unit }) => {
      return { x: x / (unit * 10), y: y / (unit * 10) };
    },
    convertPositionToSVG: (value, unit) => {
      return value * (unit * 10);
    },
  };
};

export const {
  calculatePosition,
  convertPositionFromSVG,
  convertPositionToSVG,
} = PositionCalculator();

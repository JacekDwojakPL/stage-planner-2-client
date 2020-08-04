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
    convertPositionFromSVG: ({ x, y }) => {
      return { x: (x / 100) * 2, y: (y / 100) * 2 };
    },
    convertPositionToSVG: (value) => {
      return (value / 2) * 100;
    },
  };
};

export const {
  calculatePosition,
  convertPositionFromSVG,
  convertPositionToSVG,
} = PositionCalculator();

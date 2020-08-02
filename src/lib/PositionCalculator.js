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
  };
};

export const { calculatePosition } = PositionCalculator();

const PositionCalculator = (ref) => {
  const svgPoint = ref.current.createSVGPoint();
  return {
    getPosition: (event) => {
      svgPoint.x = event.clientX;
      svgPoint.y = event.clientY;
      let { x, y } = svgPoint.matrixTransform(
        ref.current.getScreenCTM().inverse()
      );

      return { x, y };
    },
  };
};

export default PositionCalculator;

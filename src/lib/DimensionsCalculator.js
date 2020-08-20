const DimensionsCalculator = ({ width, height, unit, zoom }) => {
  return {
    width: width * (unit * 10),
    height: height * (unit * 10),
    unit,
    zoom,
  };
};

export default DimensionsCalculator;

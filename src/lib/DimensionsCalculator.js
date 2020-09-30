const DimensionsCalculator = ({ width, height, zoom }) => {
  const unit = 5;
  return {
    width: width * (unit * 10),
    height: height * (unit * 10),
    zoom,
  };
};

export default DimensionsCalculator;

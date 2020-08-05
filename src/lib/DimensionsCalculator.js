const DimensionsCalculator = ({ width, height, unit }) => {
  return { width: width * (unit * 10), height: height * (unit * 10), unit };
};

export default DimensionsCalculator;

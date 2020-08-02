const DimensionsCalculator = ({ width, height }) => {
  return { width: (width / 2) * 100, height: (height / 2) * 100 };
};

export default DimensionsCalculator;

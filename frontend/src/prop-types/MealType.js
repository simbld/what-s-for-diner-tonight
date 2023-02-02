import PropTypes from "prop-types";

const MealType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default MealType;

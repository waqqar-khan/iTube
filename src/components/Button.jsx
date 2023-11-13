import PropTypes from "prop-types";

const Button = ({ name }) => {
  return (
    <div className="px-6 py-2 mt-4 mb-4 mr-2 ml-2 bg-gray-200 rounded-lg">
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;

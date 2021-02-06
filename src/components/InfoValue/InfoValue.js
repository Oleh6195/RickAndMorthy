import "./InfoValue.scss";
import PropTypes from "prop-types";

const InfoValue = ({ text }) => {
  return <p className="InfoValue">{text}</p>;
};

InfoValue.propTypes = {
  text: PropTypes.string.isRequired
};

export default InfoValue;
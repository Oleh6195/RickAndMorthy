import './InfoLabel.scss'
import PropTypes from 'prop-types'

const InfoLabel = ({ text }) => <p className="Label">{text}</p>

InfoLabel.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InfoLabel

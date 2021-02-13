import './InfoView.scss'
import PropTypes from 'prop-types'
import InfoLabel from '../InfoLabel'
import InfoValue from '../InfoValue/InfoValue'

const InfoView = ({ label, value }) => (
  <div className="InfoView">
    <InfoLabel text={label} />
    <InfoValue text={value} />
  </div>
)

InfoView.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default InfoView

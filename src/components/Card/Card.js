import './Card.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tag from '../Tag'
import InfoView from '../InfoView/InfoView'

const Card = ({ id, name, image, status, gender, location, origin }) => (
  <div className="Card">
    <Link className="Card__link" to={`character/${id}`}>
      <img className="Card__image" src={image} alt="nit" />
    </Link>
    <div className="Card__content">
      <Link className="Card__link" to={`character/${id}`}>
        <h4 className="Card__name">{name}</h4>
      </Link>
      <div className="Card__tags">
        <Tag name={status || ''} className="Card__tag" />
        <Tag name={gender || ''} className="Card__tag" />
      </div>
      <div className="DetailedCharacter__mainInfo">
        <InfoView label="Last known location:" value={location.name || ''} />
        <InfoView label="First seen in:" value={origin.name || ''} />
      </div>
    </div>
  </div>
)

Card.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Alive', 'Dead', 'unknown']).isRequired,
  gender: PropTypes.oneOf(['Male', 'Female', 'unknown', 'Genderless'])
    .isRequired,
  location: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  origin: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Card

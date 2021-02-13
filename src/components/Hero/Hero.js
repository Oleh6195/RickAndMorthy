import './Hero.scss'
import PropTypes from 'prop-types'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import Search from '../Search/Search'
import Select from '../Select'

const statusOptions = [
  { value: '', label: 'all' },
  { value: 'alive', label: 'alive' },
  { value: 'death', label: 'death' },
]

const gendeOptions = [
  { value: '', label: 'all' },
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
]

const Hero = ({
  characterName,
  setCharacterName,
  gender,
  setGender,
  status,
  setStatus,
}) => (
  <div className="Hero">
    <h1 className="Hero__heading">
      <span>surf the</span>
      <Logo className="Hero__logo" />
      <span>universe</span>
    </h1>
    <Search
      setValue={setCharacterName}
      value={characterName}
      className="Hero__search"
    />
    <div className="Hero__filters">
      <Select
        value={status}
        onSelect={setStatus}
        options={statusOptions}
        label="Status"
      />
      <Select
        value={gender}
        onSelect={setGender}
        options={gendeOptions}
        label="Gender"
      />
    </div>
  </div>
)

Hero.propTypes = {
  characterName: PropTypes.string.isRequired,
  setCharacterName: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
}

export default Hero

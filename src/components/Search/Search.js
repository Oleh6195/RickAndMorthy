import './Search.scss'
import PropTypes from 'prop-types'

const Search = ({ value, setValue }) => {
  const handleChange = ({ target: { value } }) => {
    setValue(value)
  }
  return (
    <div className="Search">
      <input
        className="Search__input"
        placeholder="search by name"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Search

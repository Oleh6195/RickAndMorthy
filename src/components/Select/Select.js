import './Select.scss'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Select = ({ value, onSelect, options, label }) => {
  const [isOppened, setIsOppened] = useState(false)

  const handleIsOppened = () => {
    setIsOppened(!isOppened)
  }

  const renderOptions = (option) => (
    <li
      key={value}
      className="Select__option"
      onClick={() => onOptionClick(option)}
    >
      {option.label}
    </li>
  )

  const onOptionClick = (option) => {
    onSelect(option.value)
    setIsOppened(false)
  }

  const selectedOption = options?.find((option) => option.value === value)

  return (
    <div className="Select">
      <div className="Select__selectedOption" onClick={handleIsOppened}>
        <span className="Select__label">{label}</span>
        <span className="Select__value">{selectedOption?.label}</span>
      </div>

      {isOppened && (
        <ul className="Select__options">{options?.map(renderOptions)}</ul>
      )}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
}

export default Select

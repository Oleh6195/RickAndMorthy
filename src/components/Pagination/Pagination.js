import './Pagination.scss'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const getDisplayedPages = () => {
    if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages))
    if (currentPage + 2 >= pages) return _.range(Math.max(pages - 5, 0), pages)
    const minPage = Math.max(currentPage - 2, 0)
    const maxPage = Math.min(minPage + 4, pages)
    // eslint-disable-next-line no-undef
    return _.range(minPage, maxPage + 1)
  }

  const handleClick = (page, isArrowClickable = true) => () => {
    if (!isArrowClickable) {
      return
    }
    setCurrentPage(page)
  }

  const renderPage = (page) => {
    const isActive = page === currentPage
    return (
      <div
        onClick={handleClick(page)}
        className={`Pagination__page ${
          isActive ? 'Pagination__page_active' : ''
        } `}
        key={page}
      >
        {page + 1}
      </div>
    )
  }

  const renderArrowButton = (isNext = false) => {
    const nextPage = isNext ? currentPage + 1 : currentPage - 1
    const isArrowClickable =
      (!isNext && currentPage > 0) || (isNext && nextPage < pages)
    return (
      <div
        className="Pagination__page"
        onClick={handleClick(nextPage, isArrowClickable)}
      >
        <div
          className={`Pagination__arrow ${
            isNext ? 'Pagination__arrow_next' : ''
          } ${isArrowClickable ? 'Pagination__arrow_active' : ''} `}
        />
      </div>
    )
  }

  return (
    <div className="Pagination">
      {renderArrowButton()}
      {/* eslint-disable-next-line no-undef */}
      {_.map(getDisplayedPages(), renderPage)}
      {renderArrowButton(true)}
    </div>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Pagination

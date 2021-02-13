import './UserList.scss'
import Card from '../Card'
import Pagination from '../Pagination'
import { getCharacters } from '../../api'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserList = ({ status, gender, name }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [characters, setCharacters] = useState()
  const [pages, setPages] = useState(0)

  useEffect(() => {
    loadData(currentPage, {
      ...(name && { name }),
      ...(gender && { gender }),
      ...(status && { status }),
    })
  }, [name, gender, status, currentPage])

  useEffect(() => {
    setCurrentPage(0)
  }, [name, status, gender])

  const loadData = async (page = 0, params) => {
    const items = await getCharacters(page + 1, params)
    setCharacters(items?.results)
    setPages(items?.info.pages || 0)
  }

  const renderCharacter = (character) => (
    <Card key={character.id} {...character} />
  )

  return (
    <div className="UserList">
      <div className="UserList__cardList">
        {characters?.map(renderCharacter)}
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

UserList.propTypes = {
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default UserList

import './Home.scss'
import _ from 'lodash'
import { useCallback, useState } from 'react'
import UserList from '../../components/UserList'
import Hero from '../../components/Hero'

function Home() {
  const [queryName, setQueryName] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const delayedQuery = useCallback(_.debounce(setQueryName, 500), [
    setQueryName,
  ])

  const onNameChange = (value) => {
    setName(value)
    delayedQuery(value)
  }

  return (
    <div className="Home">
      <Hero
        characterName={name}
        setCharacterName={onNameChange}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />
      <UserList status={status} gender={gender} name={queryName} />
    </div>
  )
}

export default Home

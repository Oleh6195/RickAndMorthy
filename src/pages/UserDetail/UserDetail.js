import './UserDetail.scss'
import Tag from '../../components/Tag'
import InfoView from '../../components/InfoView/InfoView'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCharacter, getEpisodes } from '../../api'
import InfoValue from '../../components/InfoValue/InfoValue'
import InfoLabel from '../../components/InfoLabel'

function UserDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState('')
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const generateId = (episodeUrl) => {
    return episodeUrl.replace('https://rickandmortyapi.com/api/episode/', '')
  }

  const renderEpisode = (episode) => {
    return <InfoValue key={episode.id} text={episode.name} />
  }

  const loadData = async () => {
    const items = await getCharacter(id)
    const ids = items?.episode.map(generateId)
    const episodeResponse = await getEpisodes(ids)

    setCharacter(items)
    setEpisodes(episodeResponse)
  }

  const { name, status, gender, species, origin, created, image, location } =
    character || {}

  return character ? (
    <div className="DetailedUser">
      <p className="DetailedUser__navText">
        <NavLink
          className="DetailedUser__link"
          activeClassName="DetailedUser__activeLink"
          exact
          to="/"
        >
          Home
        </NavLink>
        <span className="DetailedUser__itemNamee">
          &nbsp;&nbsp;
          <NavLink
            className="DetailedUser__link"
            activeClassName="DetailedUser__activeLink"
            exact
            to="/"
          >
            #{id} {name}
          </NavLink>
        </span>
      </p>
      <div className="DetailedUser__container">
        <div className="DetailedUser__image">
          <img src={image} />
        </div>
        <div className="DetailedUser__description">
          <h1 className="DetailedUser__description_title">
            #{id} {name}
          </h1>
          <div className="DetailedUser__description_tags">
            <Tag name={status} />
            <Tag name={gender} />
          </div>
          <div className="DetailedUser__description__content">
            <div className="DetailedUser__description__content_userInfo">
              <InfoView label="Species:" value={species} />
              <InfoView label="Origin:" value={origin.name} />
              <InfoView label="Birthday:" value={created} />
              <InfoView label="Last known location:" value={location.name} />
              <InfoView label="First seen in:" value={origin.name} />
            </div>
            <div className="DetailedUser__description__content_episodes">
              <InfoLabel text="Episodes:" />
              {episodes?.map(renderEpisode)}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="DetailedUser">Error</div>
  )
}

export default UserDetail

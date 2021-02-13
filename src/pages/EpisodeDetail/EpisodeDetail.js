import './EpisodeDetail.scss'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getEpisodes } from '../../api'
import InfoView from '../../components/InfoView/InfoView'
import InfoLabel from '../../components/InfoLabel'
import InfoValue from '../../components/InfoValue/InfoValue'

const renderCharacters = (characterReference) => {
  const id = characterReference.split('/').slice(-1)[0]
  console.log(characterReference)
  return (
    <NavLink
      className="DetailedEpisode__link"
      key={id}
      exact
      to={`/character/${id}`}
    >
      <InfoValue text={characterReference} />
    </NavLink>
  )
}

function EpisodeDetail() {
  const { id } = useParams()
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    loadData()
  }, [id])

  const loadData = async () => {
    const episodeResponse = await getEpisodes(id)
    setEpisode(episodeResponse)
  }
  const formattedDate = new Date(episode.air_date).toDateString()
  return (
    <div className="EpisodeDetail">
      <p className="EpisodeDetail__navText">
        <NavLink
          className="EpisodeDetail__link"
          activeClassName="EpisodeDetail__activeLink"
          exact
          to="/"
        >
          Home
        </NavLink>
        <span className="EpisodeDetail__itemNamee">
          &nbsp;&nbsp;
          <NavLink
            className="EpisodeDetail__link"
            activeClassName="EpisodeDetail__activeLink"
            exact
            to="/"
          >
            #{id} {name}
          </NavLink>
        </span>
      </p>

      <div className="EpisodeDetail__container">
        <div className="EpisodeDetail__image">
          <h1>{episode.episode}</h1>
        </div>
        <div className="EpisodeDetail__description">
          <h1 className="EpisodeDetail__description_title">
            #{id} {episode.name}
          </h1>
          <div className="EpisodeDetail__description__content">
            <div className="EpisodeDetail__description__content_userInfo">
              <InfoView label="Air date:" value={formattedDate} />
            </div>
            <div className="EpisodeDetail__description__content_episodes">
              <InfoLabel text="Characters:" />
              {episode.characters?.map(renderCharacters)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EpisodeDetail

import { SERVER_URL } from '../utills'

export const getCharacters = async (page, params) => {
  const searchParams = new URLSearchParams(params)
  const response = await fetch(
    `${SERVER_URL}/character?page=${page}&${searchParams.toString()}`,
  )
  return response.json()
}

export const getCharacter = async (id) => {
  const response = await fetch(`${SERVER_URL}/character/${id}`)
  return response.json()
}

export const getEpisodes = async (ids) => {
  const response = await fetch(`${SERVER_URL}/episode/${ids}`)
  return response.json()
}

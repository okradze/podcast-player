import React from 'react'
import { useSelector } from 'react-redux'
import AudioPlayer from './AudioPlayer'

const AudioPlayerContainer = () => {
  const episode = useSelector((state) => !!state.playingPodcast.playingEpisode)

  if (episode) {
    return <AudioPlayer />
  }

  return null
}

export default AudioPlayerContainer

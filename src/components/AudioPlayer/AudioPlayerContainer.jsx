import React from 'react'
import { useSelector } from 'react-redux'
import AudioPlayer from './AudioPlayer'

const AudioPlayerContainer = () => {
    const playingPodcast = useSelector((state) => state.playingPodcast)

    if (playingPodcast.episode) {
        return <AudioPlayer />
    }

    return null
}

export default AudioPlayerContainer
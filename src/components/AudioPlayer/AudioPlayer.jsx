import React from 'react'
import { Link } from 'react-router-dom'
import Howler from 'react-howler'

import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-button.svg'
import styles from './AudioPlayer.module.scss'

const AudioPlayer = ({
    episode,
    podcastId,
    togglePlay,
    isPlaying,
    volume,
    setVolume,
}) => {
    const { thumbnail, title, audio } = episode

    return (
        <div className={styles.AudioPlayer}>
            <Howler html5 src={audio} playing={isPlaying} volume={volume} />
            <div className={styles.ThumbnailWrapper}>
                <img className={styles.Thumbnail} src={thumbnail} alt='' />
            </div>
            <Link to={`/podcast/${podcastId}`}>
                <h4 className={styles.Title}>{title}</h4>
            </Link>
            {isPlaying ? (
                <PauseButton onClick={togglePlay} className={styles.Pause} />
            ) : (
                <PlayButton onClick={togglePlay} className={styles.Play} />
            )}
        </div>
    )
}

export default AudioPlayer

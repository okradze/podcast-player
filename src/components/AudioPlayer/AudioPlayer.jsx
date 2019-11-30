import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider/lib/Slider'

import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-button.svg'
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg'
import styles from './AudioPlayer.module.scss'
import 'rc-slider/assets/index.css'

const AudioPlayer = ({
    episode,
    podcastId,
    isPlaying,
    currentTime,
    volume,
    play,
    pause,
    setVolume,
    setCurrentTime,
}) => {
    const { thumbnail, title, audio: audioSrc, audio_length_sec } = episode
    const audio = useRef(new Audio())

    useEffect(() => {
        audio.current.src = audioSrc
        audio.current.currentTime = currentTime

        const pauseEvent = audio.current.addEventListener('pause', () => {
            pause()
        })
        const playEvent = audio.current.addEventListener('play', () => {
            play()
        })
        const timeUpdateEvent = audio.current.addEventListener(
            'timeupdate',
            () => {
                setCurrentTime(audio.current.currentTime)
            },
        )

        audio.current.play()

        return () => {
            audio.current.removeEventListener('pause', pauseEvent)
            audio.current.removeEventListener('play', playEvent)
            audio.current.removeEventListener('timeupdate', timeUpdateEvent)
        }
    }, [audioSrc, play, pause, setCurrentTime])

    return (
        <div className={styles.AudioPlayer}>
            <div className={styles.EpisodeWrapper}>
                <div className={styles.ThumbnailWrapper}>
                    <img className={styles.Thumbnail} src={thumbnail} alt='' />
                </div>

                <Link className={styles.Title} to={`/podcast/${podcastId}`}>
                    {title}
                </Link>
            </div>

            <div className={styles.ControllsWrapper}>
                {isPlaying ? (
                    <PauseButton
                        tabIndex='0'
                        onClick={() => audio.current.pause()}
                        className={styles.Pause}
                    />
                ) : (
                    <PlayButton
                        tabIndex='0'
                        onClick={() => audio.current.play()}
                        className={styles.Play}
                    />
                )}

                <div className={styles.Duration}>
                    <Slider
                        onChange={value => {
                            setCurrentTime(value)
                            audio.current.currentTime = value
                        }}
                        value={currentTime}
                        step={1}
                        min={0}
                        max={audio_length_sec}
                        className={styles.Slider}
                    />
                </div>

                <div tabIndex='0' className={styles.VolumeWrapper}>
                    <div className={styles.VolumeSlider}>
                        <Slider
                            tabIndex='1'
                            onChange={value => {
                                audio.current.volume = value
                                setVolume(value)
                            }}
                            value={volume}
                            step={0.01}
                            min={0.0}
                            max={1.0}
                            vertical
                            className={styles.Slider}
                        />
                    </div>
                    <VolumeIcon className={styles.VolumeIcon} />
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer

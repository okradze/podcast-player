import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'rc-slider/lib/Slider'

import { play, pause, setVolume, setCurrentTime } from '../../store/playingPodcast/playingPodcastSlice'
import EllipsisText from '../EllipsisText/EllipsisText'
import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-button.svg'
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg'
import styles from './AudioPlayer.module.scss'
import 'rc-slider/assets/index.css'

const AudioPlayer = () => {
    const [isMinimized, setIsMinimized] = useState(true)
    const { episode, podcastId, isPlaying, currentTime, volume } = useSelector((state) => state.playingPodcast)
    const dispatch = useDispatch()

    const { thumbnail, title, audio: audioSrc, audio_length_sec } = episode
    const audio = useRef(new Audio())

    useEffect(() => {
        audio.current.src = audioSrc
        audio.current.currentTime = currentTime

        const pauseEvent = audio.current.addEventListener('pause', () => {
            dispatch(pause())
        })
        const playEvent = audio.current.addEventListener('play', () => {
            dispatch(play())
        })
        const timeUpdateEvent = audio.current.addEventListener(
            'timeupdate',
            () => {
                dispatch(setCurrentTime(audio.current.currentTime))
            },
        )

        const windowEvent = window.addEventListener('keydown', e => {
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault()
            }
            if (e.code === 'Space') {
                audio.current.paused
                    ? audio.current.play()
                    : audio.current.pause()
            } else if (e.code === 'ArrowLeft') {
                audio.current.currentTime -= 10
            } else if (e.code === 'ArrowRight') {
                audio.current.currentTime += 10
            }
        })

        audio.current.play()

        return () => {
            audio.current.removeEventListener('pause', pauseEvent)
            audio.current.removeEventListener('play', playEvent)
            audio.current.removeEventListener('timeupdate', timeUpdateEvent)
            window.removeEventListener('keydown', windowEvent)
        }
    }, [dispatch, audioSrc])

    const formatTime = time => {
        if (time) {
            const SECONDS_IN_HOUR = 3600
            const date = new Date(Math.floor(time * 1000)).toISOString()

            if (time < SECONDS_IN_HOUR) {
                return date.substr(14, 5)
            }
            return date.substr(11, 8)
        }
    }

    return (
        <div
            className={`${styles.AudioPlayer} ${isMinimized ? styles.AudioPlayerMinimized : ''
                }`}
        >
            <div className={styles.MinimizeWrapper}>
                <span
                    onClick={() => setIsMinimized(!isMinimized)}
                    tabIndex={0}
                    role='button'
                    className={styles.Minimize}
                />
            </div>

            <div className={styles.EpisodeWrapper}>
                <div className={styles.ThumbnailWrapper}>
                    <img className={styles.Thumbnail} src={thumbnail} alt='' />
                </div>

                <Link className={styles.Title} to={`/podcast/${podcastId}`}>
                    <EllipsisText>{title}</EllipsisText>
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

                {!isMinimized && (
                    <>
                        <div className={styles.DurationWrapper}>
                            <span className={styles.Time}>
                                {formatTime(currentTime)}
                            </span>

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

                            <span className={styles.Time}>
                                -
                                {formatTime(
                                    audio.current.duration -
                                    audio.current.currentTime,
                                )}
                            </span>
                        </div>

                        <div className={styles.VolumeWrapper}>
                            <div className={styles.VolumeSlider}>
                                <Slider
                                    tabIndex={0}
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
                    </>
                )}
            </div>
        </div>
    )
}

export default AudioPlayer

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'rc-slider/lib/Slider'

import {
  play,
  pause,
  setVolume,
  setCurrentTime,
  toggleMinimize,
} from '../../store/playingPodcast/playingPodcastSlice'
import EllipsisText from '../EllipsisText/EllipsisText'
import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import { ReactComponent as PauseButton } from '../../assets/pause-button.svg'
import { ReactComponent as VolumeIcon } from '../../assets/volume.svg'
import styles from './AudioPlayer.module.scss'
import 'rc-slider/assets/index.css'

const formatTime = (time) => {
  if (time) {
    const SECONDS_IN_HOUR = 3600
    const date = new Date(Math.floor(time * 1000)).toISOString()

    if (time < SECONDS_IN_HOUR) {
      return date.substr(14, 5)
    }
    return date.substr(11, 8)
  }
}

const AudioPlayer = () => {
  const { playingEpisode, podcastId, isPlaying, currentTime, volume, minimized } = useSelector(
    (state) => state.playingPodcast,
  )
  const dispatch = useDispatch()

  const { thumbnail, title, audio: audioSrc, audio_length_sec } = playingEpisode
  const { current: audio } = useRef(new Audio())

  useEffect(() => {
    audio.src = audioSrc
    audio.currentTime = currentTime
    audio.play().catch(() => {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, audioSrc])

  useEffect(() => {
    const pauseEvent = audio.addEventListener('pause', () => {
      dispatch(pause())
    })
    const playEvent = audio.addEventListener('play', () => {
      dispatch(play())
    })
    const timeUpdateEvent = audio.addEventListener('timeupdate', () => {
      dispatch(setCurrentTime(audio.currentTime))
    })

    const windowEvent = window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
      }
      if (e.code === 'Space') {
        audio.paused ? audio.play() : audio.pause()
      } else if (e.code === 'ArrowLeft') {
        audio.currentTime -= 10
      } else if (e.code === 'ArrowRight') {
        audio.currentTime += 10
      }
    })

    return () => {
      audio.removeEventListener('pause', pauseEvent)
      audio.removeEventListener('play', playEvent)
      audio.removeEventListener('timeupdate', timeUpdateEvent)
      window.removeEventListener('keydown', windowEvent)
    }
  }, [dispatch, audio])

  return (
    <div className={`${styles.AudioPlayer} ${minimized ? styles.AudioPlayerMinimized : ''}`}>
      <div className={styles.MinimizeWrapper}>
        <span
          onClick={() => dispatch(toggleMinimize())}
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
          <PauseButton tabIndex='0' onClick={() => audio.pause()} className={styles.Pause} />
        ) : (
          <PlayButton tabIndex='0' onClick={() => audio.play()} className={styles.Play} />
        )}

        {!minimized && (
          <>
            <div className={styles.DurationWrapper}>
              <span className={styles.Time}>{formatTime(currentTime)}</span>

              <div className={styles.Duration}>
                <Slider
                  onChange={(value) => {
                    dispatch(setCurrentTime(value))
                    audio.currentTime = value
                  }}
                  value={currentTime}
                  step={1}
                  min={0}
                  max={audio_length_sec}
                  className={styles.Slider}
                />
              </div>

              <span className={styles.Time}>-{formatTime(audio.duration - audio.currentTime)}</span>
            </div>

            <div className={styles.VolumeWrapper}>
              <div className={styles.VolumeSlider}>
                <Slider
                  tabIndex={0}
                  onChange={(value) => {
                    audio.volume = value
                    dispatch(setVolume(value))
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

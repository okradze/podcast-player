import React from 'react'
import { withRouter } from 'react-router-dom'

import EllipsisText from '../EllipsisText/EllipsisText'
import { playEpisode } from '../../store/playingPodcast/playingPodcastSlice'
import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import styles from './EpisodeItem.module.scss'
import { useDispatch } from 'react-redux'

export const EpisodeItem = ({ match, episode }) => {
  const dispatch = useDispatch()
  const { thumbnail, audio_length_sec, title } = episode

  return (
    <div className={styles.Episode}>
      <div className={styles.ImageWrapper}>
        <img className={styles.Image} src={thumbnail} alt='' />
      </div>
      <div className={styles.Content}>
        <div>
          <EllipsisText tagName='h4' className={styles.Title}>
            {title}
          </EllipsisText>
          <span className={styles.Duration}>
            {new Date(audio_length_sec * 1000).toISOString().substr(11, 8)}
          </span>
        </div>

        <PlayButton
          role='button'
          tabIndex='0'
          className={styles.Play}
          onClick={() => dispatch(playEpisode({ podcastId: match.params.podcastId, episode }))}
        />
      </div>
    </div>
  )
}

export default withRouter(EpisodeItem)

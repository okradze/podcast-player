import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchEpisodes } from '../../store/podcast/podcastSlice'
import EpisodeItem from '../EpisodeItem/EpisodeItem'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'
import styles from './EpisodeList.module.scss'

export const EpisodeList = () => {
  const { podcast, areEpisodesFetching } = useSelector(state => state.podcast)
  const { episodes, id, next_episode_pub_date } = podcast
  const areMoreEpisodes = !!next_episode_pub_date
  const dispatch = useDispatch()

  return (
    <div>
      {episodes && (
        <div data-testid='episodes' className={styles.List}>
          {episodes.map(episode => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </div>
      )}

      {areEpisodesFetching && <Spinner />}
      {!areEpisodesFetching && areMoreEpisodes && (
        <Button onClick={() => fetchEpisodes(dispatch, id, next_episode_pub_date)}>
          Load More
        </Button>
      )}
    </div>
  )
}

export default EpisodeList

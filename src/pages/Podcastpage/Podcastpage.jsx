import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchPodcast, fetchRecommendations } from '../../store/podcast/podcastSlice'
import PodcastList from '../../components/PodcastList/PodcastList'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import Spinner from '../../components/Spinner/Spinner'
import styles from './Podcastpage.module.scss'

const Podcastpage = ({ match }) => {
  const dispatch = useDispatch()
  const { podcast, isPodcastFetching, areRecommendationsFetching, recommendations } = useSelector(
    state => state.podcast,
  )
  const { podcastId } = match.params

  useEffect(() => {
    fetchPodcast(dispatch, podcastId)
  }, [dispatch, podcastId])

  useEffect(() => {
    fetchRecommendations(dispatch, podcastId)
  }, [dispatch, podcastId])

  const { thumbnail, publisher, description, title } = podcast || {}

  return (
    <div>
      <Helmet>
        <title>
          {podcast ? `${podcast.title} | Podcast Player` : 'Loading... | Podcast Player'}
        </title>
      </Helmet>

      {isPodcastFetching && <Spinner />}
      {!isPodcastFetching && podcast && (
        <div>
          <h2 className={styles.Title}>{title}</h2>
          <div className={styles.Content}>
            <div className={styles.ThumbnailWrapper}>
              <img className={styles.Thumbnail} src={thumbnail} alt='' />
            </div>
            <div>
              <h3 className={styles.Publisher}>{publisher}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
                className={styles.Text}
              />
            </div>
          </div>

          <div className={styles.EpisodeList}>
            <EpisodeList />
          </div>

          {areRecommendationsFetching && <Spinner />}
          {recommendations && <PodcastList podcasts={recommendations} title='Recommendations' />}
        </div>
      )}
    </div>
  )
}

export default Podcastpage

import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import PodcastList from '../../components/PodcastList/PodcastList'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import styles from './Podcastpage.module.scss'

const Podcastpage = ({ match }) => {
    const [podcast, setPodcast] = useState()
    const [recommendations, setRecommendations] = useState()
    const [paginationInfo, setPaginationInfo] = useState('')

    const { podcastId } = match.params

    useEffect(() => {
        return () => {
            setPaginationInfo('')
            setPodcast()
            setRecommendations()
        }
    }, [podcastId])

    useEffect(() => {
        const fetchPodcast = async () => {
            const { data } = await listenNotesApi.get(
                `/podcasts/${podcastId}?next_episode_pub_date=${paginationInfo}`,
            )
            setPodcast((prevState = { episodes: [] }) => ({
                ...data,
                episodes: [...prevState.episodes, ...data.episodes],
            }))
        }
        fetchPodcast()
    }, [podcastId, paginationInfo])

    useEffect(() => {
        const fetchRecommendations = async () => {
            const { data } = await listenNotesApi.get(
                `/podcasts/${podcastId}/recommendations`,
            )
            setRecommendations(data.recommendations)
        }
        fetchRecommendations()
    }, [podcastId])

    const loadMoreEpisodes = () => {
        const nextEpisodePubDate = podcast.next_episode_pub_date
        if (nextEpisodePubDate) {
            setPaginationInfo(nextEpisodePubDate)
        }
    }

    if (podcast) {
        const { thumbnail, publisher, description, title, episodes } = podcast

        return (
            <div>
                <h2 className={styles.Title}>{title}</h2>
                <div className={styles.Content}>
                    <div className={styles.ThumbnailWrapper}>
                        <img
                            className={styles.Thumbnail}
                            src={thumbnail}
                            alt=''
                        />
                    </div>
                    <div>
                        <h3 className={styles.Publisher}>{publisher}</h3>
                        <p className={styles.Text}>{description}</p>
                    </div>
                </div>

                <EpisodeList
                    loadMoreEpisodes={loadMoreEpisodes}
                    episodes={episodes}
                />

                {recommendations && (
                    <PodcastList
                        podcasts={recommendations}
                        title='Recommendations'
                    />
                )}
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default Podcastpage

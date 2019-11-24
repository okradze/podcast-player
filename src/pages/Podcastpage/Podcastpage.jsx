import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import styles from './Podcastpage.module.scss'

const Podcastpage = ({ match }) => {
    const [podcast, setPodcast] = useState()
    const [paginationInfo, setPaginationInfo] = useState('')

    useEffect(() => {
        const fetchPodcast = async () => {
            const { data } = await listenNotesApi.get(
                `/podcasts/${match.params.podcastId}?next_episode_pub_date=${paginationInfo}`,
            )
            setPodcast((prevState = { episodes: [] }) => ({
                ...data,
                episodes: [...prevState.episodes, ...data.episodes],
            }))
        }
        fetchPodcast()

        return () => {
            setPodcast()
            setPaginationInfo('')
        }
    }, [match.params.podcastId, paginationInfo])

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
                    <img className={styles.Thumbnail} src={thumbnail} alt='' />
                    <div>
                        <h3 className={styles.Publisher}>{publisher}</h3>
                        <p className={styles.Text}>{description}</p>
                    </div>
                </div>

                <EpisodeList
                    loadMoreEpisodes={loadMoreEpisodes}
                    episodes={episodes}
                />
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}

export default Podcastpage

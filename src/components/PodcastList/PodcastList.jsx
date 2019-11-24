import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import Button from '../Button/Button'
import PodcastItem from '../PodcastItem/PodcastItem'
import styles from './PodcastList.module.scss'

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchPodcasts = async () => {
            const { data } = await listenNotesApi.get(
                `/best_podcasts?page=${page}&safe_mode=1`,
            )
            setPodcasts(prevState => [...prevState, ...data.podcasts])
        }
        fetchPodcasts()
    }, [page])

    const loadMorePodcasts = () => {
        setPage(page + 1)
    }

    return (
        <div className={styles.Wrapper}>
            <h2 className={styles.Title}>Popular Podcasts</h2>
            <div className={styles.PodcastList}>
                {podcasts &&
                    podcasts.map(podcast => (
                        <PodcastItem key={podcast.id} {...podcast} />
                    ))}
            </div>
            <Button onClick={() => loadMorePodcasts()}>Load More</Button>
        </div>
    )
}

export default PodcastList

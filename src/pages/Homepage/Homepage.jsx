import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'

const Homepage = () => {
    const [podcasts, setPodcasts] = useState({
        podcasts: [],
    })
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchPodcasts = async () => {
            const { data } = await listenNotesApi.get(
                `/best_podcasts?page=${page}`,
            )
            setPodcasts(prevState => ({
                ...data,
                podcasts: [...prevState.podcasts, ...data.podcasts],
            }))
        }
        fetchPodcasts()
    }, [page])

    const loadMorePodcasts = () => {
        if (podcasts.has_next) {
            setPage(page + 1)
        }
    }

    return podcasts ? (
        <div>
            <PodcastList
                needsLoadMoreButton
                podcasts={podcasts.podcasts}
                loadMorePodcasts={loadMorePodcasts}
            />
            <Button onClick={() => loadMorePodcasts()}>Load More</Button>
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Homepage

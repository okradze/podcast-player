import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'

const Discoverpage = () => {
    const [curatedPodcasts, setCuratedPodcasts] = useState(null)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await listenNotesApi.get(
                `curated_podcasts?page=${page}`,
            )
            setCuratedPodcasts(data)
        }
        fetchData()
    }, [page])

    const loadMorePodcasts = () => {
        if (curatedPodcasts.has_next) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            {curatedPodcasts &&
                curatedPodcasts.curated_lists.map(({ id, title, podcasts }) => (
                    <PodcastList key={id} title={title} podcasts={podcasts} />
                ))}
            <Button onClick={() => loadMorePodcasts()}>Load More</Button>
        </div>
    )
}

export default Discoverpage

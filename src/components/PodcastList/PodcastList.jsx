import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import PodcastItem from '../PodcastItem/PodcastItem'

const PodcastList = () => {
    const [podcasts, setPodcasts] = useState(null)

    useEffect(() => {
        // listenNotesApi.get('/best_podcasts?page=1&safe_mode=1').then(res => {
        //     setPodcasts(res.data.podcasts)
        // })
    }, [])

    return (
        <div>
            Podcasts
            <div>
                {podcasts &&
                    podcasts.map(({ id, ...podcast }) => (
                        <PodcastItem key={id} {...podcast} />
                    ))}
            </div>
        </div>
    )
}

export default PodcastList
